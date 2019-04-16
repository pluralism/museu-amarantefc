<template>
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
            <div class="calendar__days__item calendar__days__item calendar__days__item--has-events">14</div>
            <div class="calendar__days__item calendar__days__item--today">15</div>
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
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({ name: 'calendar' })
    export default class Calendar extends Vue { }
</script>

<style lang="scss">
    .calendar {
        position: relative;
        font-size: 1.2rem;
        color: #04b46b;

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
            position: relative;
            z-index: 1;

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

                &--has-events {
                    position: relative;
                    cursor: pointer;

                    &:hover {
                        font-weight: 600;
                    }

                    &::after {
                        position: absolute;
                        content: '';
                        width: .5rem;
                        height: .5rem;
                        right: 25%;
                        top: 25%;
                        border-radius: 50%;
                        font-weight: 400;
                        background-color: #f78536;
                    }
                }

                &--today {
                    position: relative;
                    color: rgb(190, 186, 186);
                    font-weight: 600;

                    &::before {
                        content: "";
                        position: absolute;
                        width: 4rem;
                        height: 4rem;
                        top: 50%;
                        left: 50%;

                        transform: translateX(-50%) translateY(-50%);
                        border: 2px solid #202221;
                        border-radius: 50%;
                        background-color: #202221;
                        z-index: -1;
                    }
                }
            }
        }
    }
</style>