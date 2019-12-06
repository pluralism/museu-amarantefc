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
                <h3>I Encontro Alvinegro</h3>
            </div>

            <div class="event-details__content">
                <h2 class="event-details__date">10 MARÇO 2018</h2>
                <p>Lorem ipsum dolor sit amet, vel no vitae feugait senserit. Eius ignota similique sit at, vide partem vidisse duo eu. Erat tritani delenit ne mei. Eu vim percipitur philosophia, ea utinam placerat inimicus mei. Et tation fuisset evertitur cum, mel iusto option scriptorem ea. Probo nulla suscipit eos ad, aeque iudico sea ne, eum doming laboramus no. Vix tamquam consetetur et. Dolore ponderum omittantur ex cum, eius voluptatum complectitur te vel. Qui id tale platonem, nam ei unum munere.</p>
                <p><b>Horários:</b> 10H30-12H00</p>
            </div>

            <div class="event-details__place">
                <h5>Local</h5>
                <h3>Estádio Amarante FC - Amarante</h3>
            </div>
        </div>

        <div class="event-details__gallery">
            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/2.jpg" alt="I Encontro Alvinegro">
            </figure>

            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/3.jpg" alt="I Encontro Alvinegro">
            </figure>

            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/4.jpg" alt="I Encontro Alvinegro">
            </figure>

            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/5.jpg" alt="I Encontro Alvinegro">
            </figure>

            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/6.jpg" alt="I Encontro Alvinegro">
            </figure>

            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/7.jpg" alt="I Encontro Alvinegro">
            </figure>

            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/8.jpg" alt="I Encontro Alvinegro">
            </figure>

            <figure class="event-details__gallery__item">
                <img src="../assets/events/encontro_alvinegro_1/9.jpg" alt="I Encontro Alvinegro">
            </figure>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'eventDetails' })
export default class EventDetails extends Vue {
    goBack() {
        if (this.$route.query.url) {
            // @ts-ignore
            this.$router.push({ path: this.$route.query.url });
        } else {
            this.$router.push({ path: `/schedule/${new Date().getFullYear()}?showImmediateEvents=1` });
        }
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