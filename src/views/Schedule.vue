<template>
    <div class="schedule">
        <div class="calendar__wrapper">
            <div class="calendar">
                <div class="calendar__controls">
                    <button class="calendar__controls__prev">
                        <svg width="14" height="10" viewBox="0 0 14 10">
                            <path d="M5.06 0l.891.881-3.529 3.494L14 4.432v1.25L2.422 5.625l3.529 3.494-.892.881L0 5z" fill="#2c272f" fill-rule="evenodd"></path>
                        </svg>
                    </button>

                    <div class="calendar__controls__date">
                        <span>Abril 2019</span>
                    </div>

                    <button class="calendar__controls__next">
                        <svg width="14" height="10" viewBox="8 10 14 10">
                            <path d="M16.94 10l-.891.881 3.529 3.494L8 14.432v1.25l11.578-.057-3.529 3.494.892.881L22 15z" fill="#2c272f" fill-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div class="calendar__days">
                    <div class="calendar__days__item calendar__days__item--header">Dom</div>
                    <div class="calendar__days__item calendar__days__item--header">Seg</div>
                    <div class="calendar__days__item calendar__days__item--header">Ter</div>
                    <div class="calendar__days__item calendar__days__item--header">Qua</div>
                    <div class="calendar__days__item calendar__days__item--header">Qui</div>
                    <div class="calendar__days__item calendar__days__item--header">Sex</div>
                    <div class="calendar__days__item calendar__days__item--header">Sáb</div>


                    <div class="calendar__days__item calendar__days__item--prev-month">31</div>
                    <div class="calendar__days__item">1</div>
                    <div class="calendar__days__item">2</div>
                    <div class="calendar__days__item">3</div>
                    <div class="calendar__days__item">4</div>
                    <div class="calendar__days__item">5</div>
                    <div class="calendar__days__item">6</div>
                    <div class="calendar__days__item">7</div>
                    <div class="calendar__days__item">8</div>
                    <div class="calendar__days__item">9</div>
                    <div class="calendar__days__item">10</div>
                    <div class="calendar__days__item">11</div>
                    <div class="calendar__days__item">12</div>
                    <div class="calendar__days__item">13</div>
                    <div class="calendar__days__item">14</div>
                    <div class="calendar__days__item">15</div>
                    <div class="calendar__days__item">16</div>
                    <div class="calendar__days__item">17</div>
                    <div class="calendar__days__item">18</div>
                    <div class="calendar__days__item">19</div>
                    <div class="calendar__days__item">20</div>
                    <div class="calendar__days__item">21</div>
                    <div class="calendar__days__item">22</div>
                    <div class="calendar__days__item">23</div>
                    <div class="calendar__days__item">24</div>
                    <div class="calendar__days__item">25</div>
                    <div class="calendar__days__item">26</div>
                    <div class="calendar__days__item">27</div>
                    <div class="calendar__days__item">28</div>
                    <div class="calendar__days__item">29</div>
                    <div class="calendar__days__item">30</div>
                    <div class="calendar__days__item calendar__days__item--next-month">1</div>
                    <div class="calendar__days__item calendar__days__item--next-month">2</div>
                    <div class="calendar__days__item calendar__days__item--next-month">3</div>
                    <div class="calendar__days__item calendar__days__item--next-month">4</div>
                </div>
            </div>
        </div>

        <div class="schedule__wrapper">
            <!-- <div class="schedule__controls">
                <a href="#" class="controls__prev">&lt;</a>
                <a href="#" class="controls__next">&gt;</a>
            </div> -->

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

@Component({ name: 'schedule' })
export default class Schedule extends Vue { }
</script>

<style lang="scss">
    .calendar {
        &__wrapper {
            flex-basis: 20%;
            margin-right: 3rem;
            font-size: 1.2rem;
            color: #04b46b;
        }

        &__controls {
            margin-bottom: 2rem;

            display: flex;
            justify-content: space-around;

            & > button {
                background-color: transparent;
                border: none;
                cursor: pointer;
            }

            &__date {
                font-weight: 600;
                font-size: 1.5rem;
            }
        }

        &__weekdays {
            list-style: none;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;

            text-transform: uppercase;
            font-weight: 600;
        }

        &__days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);

            &__item {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.5rem 1rem;
                font-size: 1.5rem;

                &--header {
                    font-weight: 600;
                    font-size: 1.7rem;
                }

                &--prev-month {
                    color: #202221;
                }

                &--next-month {
                    color: #202221;
                }
            }
        }
    }

    .schedule {
        display: flex;
        padding: 8rem 3rem;

        &__wrapper {
            flex-basis: 80%;
        }

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
