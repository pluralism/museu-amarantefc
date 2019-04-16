<template>
    <div class="page">
        <div class="loading-ring"></div>

        <div class="calendar">
            <Calendar />
        </div>

        <div class="schedule">
            <header class="schedule__header">
                <div class="schedule__month">Abril 2019</div>
            </header>

            <div class="schedule__events">
                <div class="schedule__events__day">
                    <div class="schedule__events__day__header">
                        <div class="details">
                            <span class="day">
                                01<span class="weekday">SEG</span>
                            </span>
                        </div>
                    </div>

                    <ul class="schedule__events__day__list">
                        <li class="event">
                            <div class="event__details">
                                <div class="left">
                                    <div class="date">
                                        <span>21:00</span>
                                    </div>
                                </div>

                                <div class="right">
                                    <div class="name">
                                        <span>Leixões x Amarante FC</span>
                                    </div>

                                    <div class="description">
                                        <span>Carambola - 14.ª Jorn. Zona Sul Camp. Nac. 1.ª Divisão, Clube de Bilhar Eborense (Évora)</span>
                                    </div>
                                </div>
                            </div>

                            <div class="event__actions">
                                <div class="event__actions__details">
                                    <a href="#">
                                        <span>Ver detalhes</span>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li class="event">
                            <div class="event__details">
                                <div class="left">
                                    <div class="date">
                                        <span>21:00</span>
                                    </div>
                                </div>

                                <div class="right">
                                    <div class="name">
                                        <span>Perafita x Amarante FC</span>
                                    </div>

                                    <div class="description">
                                        <span>Carambola - 14.ª Jorn. Zona Sul Camp. Nac. 1.ª Divisão, Clube de Bilhar Eborense (Évora)</span>
                                    </div>
                                </div>
                            </div>

                            <div class="event__actions">
                                <div class="event__actions__details">
                                    <a href="#">
                                        <span>Ver detalhes</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Calendar from '@/components/Calendar.vue';

@Component({ name: 'schedule', components: { Calendar } })
export default class Schedule extends Vue { }
</script>


<style lang="scss">
    .page {
        z-index: 0;
        position: relative;
        display: flex;
        padding: 8rem 3rem;
    }

    .loading-ring {
        $size: 6.4rem;

        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);

        &::after {
            position: absolute;
            content: "";
            width: $size;
            height: $size;
            top: calc(50% - #{$size / 2});
            left: calc(50% - #{$size / 2});
            border: 5px solid;
            border-color: #fff transparent #fff transparent;
            border-radius: 50%;
            animation: lds-dual-ring 1.2s linear infinite;
        }
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .calendar {
        position: relative;
        flex-basis: 20%;
        margin-right: 3rem;
    }

    .schedule {
        flex-basis: 80%;

        &__controls {
            display: flex;
            font-size: 2rem;

            a {
                text-decoration: none;
                cursor: pointer;
                text-align: center;
                color: #202221;

                padding: 1rem 2rem;
                border-radius: .2rem;
                border: 1px solid #dfe1e0;
                transition: all .3s ease-in-out;

                &:hover {
                    background-color: #202221;
                    color: #04b46b;
                    transition: all .3s ease-in-out;
                }
            }
        }

        &__header {
            background-color: #202221;
            color: #fff;
            margin-bottom: 3rem;
        }

        &__month {
            font-size: 1.6rem;
            font-weight: 600;
            text-transform: capitalize;
            padding-top: 2rem;
            padding-bottom: 2rem;
            padding-left: 3rem;
            letter-spacing: .25rem;
        }

        &__events {
            &__day {
                &__header {
                    position: relative;
                    font-size: 4rem;
                    font-weight: 600;

                    &::before {
                        content: "";
                        position: absolute;
                        height: 1px;
                        width: 100%;
                        top: 50%;
                        background-color: #ddd;
                    }

                    & > .details {
                        position: relative;
                        margin-left: 3.5rem;
                        text-align: center;
                        color: #202221;

                        & > .day {
                            background-color: #fff;
                            display: block;
                            width: 7rem;
                            padding: 0 .5rem;
                            line-height: 1;

                            & > .weekday {
                                display: block;
                                font-size: 1.5rem;
                                font-weight: 300;
                            }
                        }
                    }
                }

                &__list {
                    list-style: none;
                }

                .event {
                    display: flex;
                    flex-direction: column;

                    &:not(:last-of-type) {
                        padding-bottom: 4rem;
                    }

                    &__details {
                        display: flex;
                        & > .left {
                            flex-basis: 10%;
                            display: flex;
                            align-items: center;
                            font-size: 1.4rem;
                            font-weight: 600;

                            & > .date {
                                width: 100%;
                                color: #9ea3a1;
                                text-align: right;
                            }
                        }

                        & > .right {
                            padding-left: 3rem;
                            width: 100%;

                            & > .name {
                                font-size: 2.5rem;
                                font-weight: 600;
                                color: #04b46b;
                            }

                            & > .description {
                                font-size: 1.4rem;
                                color: #9ea3a1;
                            }
                        }
                    }

                    &__actions {
                        display: flex;

                        &__details {
                            margin-top: 1.5rem;
                            margin-left: auto;

                            & > a {
                                text-decoration: none;
                                padding: 1rem 2rem;
                                border: 1px solid #04b46b;
                                border-radius: 3px;
                                color: #04b46b;
                                font-size: 1.4rem;
                                font-weight: 600;
                                text-transform: uppercase;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
