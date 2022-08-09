import { Vue } from 'vue-property-decorator';
import Vuex from 'vuex';
import { createLogger } from 'vuex';
import moment from 'moment';
import API from '../axios/axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        loadingData: false,
        events: [],
        selectedEvent: null,
        eventsApiUrl: 'api/v1/events'
    },
    mutations: {
        clearEvents(state) {
            state.events.splice(0, state.events.length);
        },
        addEvent(state, event) {
            // @ts-ignore
            state.events.push(event);
        },
        setSelectedEvent(state, event) {
            state.selectedEvent = event;
        },
        setLoadingData(state, value) {
            state.loadingData = value;
        }
    },
    getters : {
        events: state => state.events,
        selectedEvent: state => state.selectedEvent,
        isLoadingData: state => state.loadingData
    },
    actions: {
        async getEvents({ commit, state }, payload) {
            try {
                const date = payload.date || moment();
                commit('clearEvents');
                commit('setLoadingData', true);
                const res = await API().get(state.eventsApiUrl, { params: { date: new Date(date).toISOString() }});
                const { data } = res.data;
                if (data) {
                    for (const event of data) {
                        event.date = moment(event.date);
                        commit('addEvent', event);
                    }
                }
            } catch (err) {
                console.error('[getEvents] error on action:', err);
            } finally {
                commit('setLoadingData', false);
            }
        },
        async getEventBySlug({ commit, state }, payload) {
            try {
                const slug = payload.slug || '';
                commit('setLoadingData', true);
                const res = await API().get(`${state.eventsApiUrl}/${slug}`);
                const { data } = res.data;
                data.date = moment(data.date);
                commit('setSelectedEvent', data);
            } catch (err) {
                console.log('[getEventBySlug] error on action:', err);
            } finally {
                commit('setLoadingData', false);
            }
        }
    }
});