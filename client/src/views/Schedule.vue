<template>
  <div class="page">
    <!-- <div class="loading-ring"></div> -->

    <div class="calendar">
      <Calendar :date="date" @update:addMonth="addMonth($event)" />
    </div>

    <div class="schedule">
      <header class="schedule__header">
        <div class="schedule__month">{{ currentDate | formatDate("MMMM") }} {{ currentDate.year() }}</div>
      </header>

      <div class="schedule__events">
        <template v-if="Object.keys(groupedEvents).length > 0">
          <div class="schedule__events__day" v-for="(eventsDay, day, index) in groupedEvents" :key="index">
            <div class="schedule__events__day__header">
              <div class="details">
              <span class="day">
                {{day.padStart(2, '0')}}
                <span class="weekday">{{ eventsDay[0].date | formatDate("dddd") }}</span>
              </span>
              </div>
            </div>

            <ul class="schedule__events__day__list" v-for="(event, index) in eventsDay" :key="index">
              <li class="event">
                <div class="event__details">
                  <div class="left">
                    <div class="date">
                      <span>{{ event.date | formatDate("HH:mm") }}</span>
                    </div>
                  </div>

                  <div class="right">
                    <div class="name">
                      <span>{{ event.title }}</span>
                    </div>

                    <div class="description">
                      <span>{{ event.description }}</span>
                    </div>
                  </div>
                </div>

                <div class="event__actions">
                  <div class="event__actions__details">
                    <router-link
                            tag="button"
                            :class="'event__actions__details--' + (event.detailsLink ? 'available' : 'unavailable')"
                            :to="{ path: event.detailsLink, query: { url: $route.fullPath } }"
                    >
                      <span v-if="event.detailsLink">Ver detalhes</span>
                      <span v-else>Detalhes indisponíveis</span>
                    </router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <div class="schedule__events__no__events">
            <span>Sem eventos disponíveis!</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Watch} from "vue-property-decorator";
import Calendar from "@/components/Calendar.vue";
import moment from "moment";

@Component({
  name: "schedule",
  components: { Calendar },
  filters: {
    formatDate(value: any, arg1: any) {
      return value.locale("pt").format(arg1);
    }
  }
})
export default class Schedule extends Vue {
  private events = [
    {
      date: moment(new Date(2018, 2, 10, 15, 0)),
      title: "I Encontro Alvinegro",
      description: "Estádio do Amarante FC",
      detailsLink: "/events/encontro_alvinegro_1"
    },
    {
      date: moment(new Date(2018, 2, 10, 18, 0)),
      title: "I Prémio Alvinegro",
      description: "Estádio do Amarante FC",
      detailsLink: ""
    },
    {
      date: moment(new Date(2018, 2, 10, 20, 0)),
      title: "I Revista Alvinegro",
      description: "Estádio do Amarante FC",
      detailsLink: ""
    },
    {
      date: moment(new Date(2019, 2, 9, 20, 0)),
      title: "II Revista Alvinegro",
      description: "Estádio do Amarante FC",
      detailsLink: ""
    },
    {
      date: moment(new Date(2019, 2, 9, 18, 0)),
      title: "II Prémio Alvinegro",
      description: "Estádio do Amarante FC",
      detailsLink: ""
    },
    {
      date: moment(new Date(2020, 2, 7, 16, 0)),
      title: "III Prémio Alvinegro",
      description: "Estádio do Amarante FC",
      detailsLink: ""
    }
  ];

  private today = moment(new Date());
  private date = moment(new Date());

  @Watch('$route')
  onRouteChange(value: any, oldValue: any) {
    const year = +value.params.year;
    this.setInitialDate(year, oldValue, value.query.showImmediateEvents);
  }

  created() {
    const year = +this.$route.params.year;
    this.setInitialDate(year, 0, true);
  }

  setInitialDate(year: number, oldYear: number, showFirstEventOfYear?: boolean) {
    if (year !== oldYear) {
      if (showFirstEventOfYear) {
        const filteredEvents = this.events.filter(event => event.date.year() === year);

        if (filteredEvents.length > 0) {
          this.date = filteredEvents[0].date.clone().date(1);
          return;
        }
      }
      
      this.date = this.date.year(year).month(0).date(1).clone();      
    } else {
      this.date = this.today.clone();
    }
  }

  get currentDate() {
    return this.date;
  }

  get groupedEvents() {
    const filteredEvents = this.events.filter(e => e.date.year() === this.currentDate.year() && e.date.month() === this.currentDate.month());

    const grouped = filteredEvents.reduce((acc: { [key: number]: any }, current) => {
      const day = current.date.date();
      if (!acc.hasOwnProperty(day)) {
        acc[day] = [];
      }
      acc[day].push(current);
      return acc;
    }, {});

    for (const eventsGroup of Object.values(grouped)) {
      if (Array.isArray(eventsGroup)) {
        eventsGroup.sort((a: any, b: any) => a.date - b.date);
      }
    }

    return grouped;
  }

  addMonth(ev: any) {
    const year = this.date.year();
    this.date = moment(this.date).add(ev, 'months').date(1).clone();
    if (this.date.year() !== year) {
      this.$router.replace(`/schedule/${this.date.year()}?showImmediateEvents=${this.$route.query.showImmediateEvents}`);
    }
  }
}
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
  background-color: rgba(0, 0, 0, 0.5);

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
    animation: lds-dual-ring 1.2s ease-in-out infinite;
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
      color: var(--afc-primary-color);

      padding: 1rem 2rem;
      border-radius: 0.2rem;
      border: 1px solid #dfe1e0;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: var(--afc-primary-color);
        transition: all 0.3s ease-in-out;
      }
    }
  }

  &__header {
    background-color: var(--afc-primary-color);
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
    letter-spacing: 0.25rem;
  }

  &__events {
    &__no__events {
      display: flex;
      justify-content: center;

      & > span {
        font-size: 2.5rem;
      }
    }

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
          color: var(--afc-primary-color);

          & > .day {
            background-color: #fff;
            display: block;
            width: 7rem;
            padding: 0 0.5rem;
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
              color: #2c272f;
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

            & > button {
              background: transparent;
              text-decoration: none;
              padding: 1rem 2rem;
              border-radius: 3px;
              font-size: 1.4rem;
              font-weight: 400;
              text-transform: uppercase;
              outline: none;
            }

            &--available {
              cursor: pointer;
              color: #04b46b;
              border: 0.1rem solid #04b46b;
            }

            &--unavailable {
              cursor: auto;
              color: #efefef;
              border: 0.1rem solid #efefef;
            }
          }
        }
      }
    }
  }
}
</style>