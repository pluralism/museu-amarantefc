<template>
    <div class="calendar">
        <div class="calendar__controls">
            <button class="calendar__controls__prev" @click="updateMonth(-1)">
                <svg width="14" height="10" viewBox="0 0 14 10">
                    <path d="M5.06 0l.891.881-3.529 3.494L14 4.432v1.25L2.422 5.625l3.529 3.494-.892.881L0 5z" fill="#2c272f" fill-rule="evenodd"></path>
                </svg>
            </button>

            <div class="calendar__controls__date">
                <span>{{ date | formatMonthName }} {{ date.year() }}</span>
            </div>

            <button class="calendar__controls__next" @click="updateMonth(1)">
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

            <template v-for="(day, index) in dates">
                <div class="calendar__days__item" :key="index" :class="{ 
                    'calendar__days__item--prev-month': day.isPreviousMonth,
                    'calendar__days__item--next-month': day.isNextMonth, 
                    'calendar__days__item--today': day.isToday }">{{ day.date.date() }}</div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import moment from "moment";

    @Component({
        name: 'calendar',
        props: ['date'],
        filters: {
            formatMonthName(value: Date) {
                return moment(value)
                    .format("MMMM")
            },
        }
    })
    export default class Calendar extends Vue {
        updateMonth(n: number) {
            this.$emit('update:month', n);
        }

        get dates() {
            const dates = [];

            const today = moment(new Date());
            // @ts-ignore
            const copydate = moment(this.date).set('date', 1);
            let weekday = (copydate.isoWeekday()) % 7; // 1 - monday, 7 - sunday

            if (weekday > 0) {
                for(let i = 0; i < weekday; i++) {
                    const tempDate = copydate.clone().add((weekday - i) * -1, 'days');
                    dates.push({
                        date: tempDate,
                        isPreviousMonth: true,
                        isToday: tempDate.isSame(today, 'day')
                    });
                }
            }

            const daysInMonth = copydate.daysInMonth();
            for(let i = 0; i < daysInMonth; i++) {
                const tempDate = copydate.clone().add(i, 'days');
                dates.push({
                    date: tempDate,
                    isToday: tempDate.isSame(today, 'day')
                });
            }

            const lastDayOfMonth = dates[dates.length - 1].date;
            weekday = lastDayOfMonth.clone().isoWeekday() % 7;
            if (weekday != 6) {
                for(let i = 1; i <= 6 - weekday; i++) {
                    const tempDate = lastDayOfMonth.clone().add(i, 'days');
                    dates.push({
                        date: tempDate,
                        isNextMonth: true,
                        isToday: tempDate.isSame(today, 'day')
                    });
                }
            }

            return dates;
        }
    }
</script>

<style lang="scss">
    .calendar {
        position: relative;
        font-size: 1.2rem;
        color: var(--afc-light-brown);

        &__controls {
            margin-bottom: 2rem;

            display: flex;
            justify-content: space-around;

            & > button {
                background-color: transparent;
                border: none;
                outline: none;
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
                    color: var(--afc-primary-color);
                }

                &--next-month {
                    color: var(--afc-primary-color);
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
                        border: 2px solid var(--afc-primary-color);
                        border-radius: 50%;
                        background-color: var(--afc-primary-color);
                        z-index: -1;
                    }
                }
            }
        }
    }
</style>
