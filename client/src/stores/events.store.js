import { Vue } from 'vue-property-decorator';
import moment from 'moment';

export default new Vue({
    data() {
        return {
            events: [],
            selectedEvent: null,
            baseApiUrl: 'events'
        };
    },
    methods: {
        getEvents(date = new Date()) {
            this.events.splice(0, this.events.length);
            
            this.$http.get(this.baseApiUrl, { params: { date: date.toISOString() }}).then(res => {
                const { data } = res.data;
                for (const event of data) {
                    event.date = moment(event.date);
                    this.events.push(event);
                }
            });
        },
        getEventBySlug(slug) {
            this.$http.get(`${this.baseApiUrl}/${slug}`).then(res => {
                const { data } = res.data;
                data.date = moment(data.date);
                this.selectedEvent = data;
            });
        }
    }
});