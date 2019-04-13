<template>
    <div class="event-details">
        <div class="event-details__return">
            <a class="event-details__breadcumbs" href="#">
                <svg width="16" height="12" viewBox="0 0 14 10">
                    <path d="M5.06 0l.891.881-3.529 3.494L14 4.432v1.25L2.422 5.625l3.529 3.494-.892.881L0 5z" fill="#2c272f" fill-rule="evenodd"></path>
                </svg>
                <span>Agenda</span>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'eventDetails' })
export default class EventDetails extends Vue {}
</script>

<style lang="scss">
    .event-details {
        padding: 8rem;

        &__return {
            font-size: 1.8rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        &__breadcumbs {
            text-decoration: none;
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
    }
</style>