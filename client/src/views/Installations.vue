<template>
    <div class="installations">
        <div class="installations__container">
            <figure v-for="installation in installations" :key="installation.id"
            :class="{'installations__item': true, ['installations__item--' + installation.id]: true}">
                <div class="installations__item__caption">
                    <span>{{ installation.name }}</span>
                    <span class="year">{{ installation.yearRange }}</span>
                </div>
                <img :src="installation.image" class="installations__item__img" :alt="installation.name">
            </figure>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'installations' })
export default class Installations extends Vue {
    private installations = [
        {
            id: 1,
            name: 'Campo da Praça',
            yearRange: '1923-1925',
            image: require('../assets/installations/1_praca.jpg'),
        },
        {
            id: 2,
            name: 'Campo da Florestal',
            yearRange: '1925-1926',
            image: require('../assets/installations/2_florestal.jpg'),
        },
        {
            id: 3,
            name: 'Campo da Feira',
            yearRange: '1931-1933',
            image: require('../assets/installations/3_feira.jpg'),
        },
        {
            id: 4,
            name: 'Campo da Barroca',
            yearRange: '1934-1981',
            image: require('../assets/installations/4_barroca.jpg'),
        },
        {
            id: 5,
            name: 'Estádio Municipal de Amarante (2004)',
            yearRange: '1981-2004',
            image: require('../assets/installations/5_estadio_2004.jpg'),
        },
        {
           id: 6,
           name: 'Estádio Municipal de Amarante',
           yearRange: '2004-Presente',
           image: require('../assets/installations/6_estadio_2020.jpg'),
        }
    ];
}
</script>

<style lang="scss">
    .installations {
        padding: 8rem;

        &__container {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: repeat(24, 5vw);
            grid-gap: 1.5rem;
        }

        &__item {
            position: relative;

            &__img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &__caption {
                cursor: pointer;
                position: absolute;
                width: 100%;
                height: 6rem;
                bottom: 0;
                background: rgba(51, 51, 51, .4);

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: all .3s ease-in-out;

                > span {
                    color: #fff;
                    font-size: 2rem;

                    &.year {
                        font-size: 1.6rem;
                        font-weight: 400;
                    }
                }
            }

            &--1 {
                grid-column: 1 / 6;
                grid-row: 1 / 5;
            }

            &--2 {
                grid-column: 6 / -1;
                grid-row: 1 / 5;
            }

            &--3 {
                grid-column: 1 / 6;
                grid-row: 5 / 9;
            }

            &--4 {
                grid-column: 6 / -1;
                grid-row: 5 / 9;
            }

            &--5 {
                grid-column: 1 / -1;
                grid-row: 9 / 19;
            }

            &--6 {
                grid-column: 1 / -1;
                grid-row: 19 / -1;
            }
        }
    }
</style>
