<template>
    <div class="event-details">
        <div class="event-details__return">
            <a class="event-details__breadcumbs" @click="goBack()">
                <svg width="16" height="12" viewBox="0 0 14 10">
                    <path d="M5.06 0l.891.881-3.529 3.494L14 4.432v1.25L2.422 5.625l3.529 3.494-.892.881L0 5z" fill="#2c272f" fill-rule="evenodd"></path>
                </svg>
                <span>Agenda</span>
            </a>
        </div>

        <div class="event-details__container">
            <div class="event-details__title">
                <h3>{{ event.title }}</h3>
            </div>

            <div class="event-details__content">
                <h2 class="event-details__date">{{ event.date | formatEventDate }}</h2>
                <p v-html="event.description"></p>
            </div>

            <div class="event-details__place">
                <h5>Local</h5>
                <h3>{{ event.place }}</h3>
            </div>
        </div>

        <div v-if="event.images && event.images.length > 0" class="event-details__gallery">
            <figure v-for="image in event.images" class="event-details__gallery__item" :key="image">
                <img :src="getImageUrl(image)" alt="I Encontro Alvinegro">
            </figure>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import moment from 'moment';

@Component({ 
    name: 'eventDetails',
    filters: {
        formatEventDate(value: Date) {
            return moment(value)
                .locale("pt")
                .format("LL");
        }
    }
})
export default class EventDetails extends Vue {
    mounted() {
        const slug = this.$route.params.slug;
        this.$store.dispatch('getEventBySlug', { slug });
    }

    get event() {
        return this.$store.getters.selectedEvent || Object.create(null);
    }

    private getImageUrl(img: string) {
        return '/eventsimages/' + img;
    }

    goBack() {
        let year = new Date().getFullYear();
        if (this.$store.getters.selectedEvent) {
            year = this.$store.getters.selectedEvent.date.year();
        }

        this.$router.push({ path: `/schedule/${year}` });
    }
}
</script>

<style lang="scss">
    .event-details {
        padding: 8rem;

        &__gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 8rem;
            margin-bottom: 8rem;

            &__item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 45rem;
                margin: 1rem;

                & > img {
                    max-width: 100%;
                }
            }
        }

        &__return {
            font-size: 1.8rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        &__breadcumbs {
            text-decoration: none;
            cursor: pointer;
            color: #2c272f;

            & > span {
                margin-left: 3.5rem;
                transition: all .3s ease-in-out;

                &:hover {
                    margin-left: 1.5rem;
                    transition: all .3s ease-in-out;
                }
            }
        }

        &__container {
            margin-top: 7rem;
        }

        &__title {
            font-size: 2.5rem;
            font-weight: 600;
            padding-left: 5rem;
            border-left: 2px solid #2c272f;
        }

        &__content {
            margin-top: 6rem;
            padding-left: 5rem;
            border-left: 2px solid hsla(278,4%,58%,.1);

            & > p {
                font-size: 1.5rem;
                line-height: 3rem;
                margin-top: 3rem;

                & > b {
                    text-transform: uppercase;
                }
            }
        }

        &__date {
            font-size: 2rem;
            text-transform: uppercase;
        }

        &__place {
            margin-top: 6rem;
            padding-left: 5rem;
            border-left: 2px solid hsla(278,4%,58%,.1);

            & > h5 {
                font-size: 1.5rem;
                font-weight: 400;
                text-transform: uppercase;
            }

            & > h3 {
                font-size: 2rem;
            }
        }
    }
</style>