import { Vue } from 'vue-property-decorator';

export default new Vue({
    data() {
        return {
            currentComponent: 'history'
        };
    },
    methods: {
        setComponent(name) {
            this.currentComponent = name;
        }
    }
});
