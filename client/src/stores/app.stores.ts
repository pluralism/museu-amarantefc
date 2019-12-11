import { Vue } from 'vue-property-decorator';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import moment from 'moment';
import API from '../axios/axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        events: [],
        selectedEvent: null,
        baseApiUrl: 'events'
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
        }
    },
    getters : {
        events: state => state.events,
        selectedEvent: state => state.selectedEvent,
    },
    actions: {
        getEvents({ commit, state }, payload) {
            const date = payload.date || new Date();
            commit('clearEvents');
            API().get(state.baseApiUrl, { params: { date: date.toISOString() }}).then((res: any) => {
                const { data } = res.data;
                for (const event of data) {
                    event.date = moment(event.date);
                    commit('addEvent', event);
                }
            });
        },
        getEventBySlug({ commit, state }, payload) {
            const slug = payload.slug || '';

            API().get(`${state.baseApiUrl}/${slug}`).then((res: any) => {
                const { data } = res.data;
                data.date = moment(data.date);
                commit('setSelectedEvent', data);
            });
        }
    }
});