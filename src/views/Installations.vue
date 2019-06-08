<template>
    <div class="installations">
        <div class="installations__container">
            <figure class="installations__item installations__item--1">
                <div class="installations__item__caption">
                    <span>Campo da Praça</span>
                    <span class="year">1923-1925</span>
                </div>
                <img src="../assets/installations/1_praca.jpg" class="installations__item__img" alt="Campo da Praça">
            </figure>

            <figure class="installations__item installations__item--2">
                <div class="installations__item__caption">
                    <span>Campo da Florestal</span>
                    <span class="year">1925-1926</span>
                </div>
                <img src="../assets/installations/2_florestal.jpg" class="installations__item__img" alt="Campo da Florestal">
            </figure>

            <figure class="installations__item installations__item--3">
                <div class="installations__item__caption">
                    <span>Campo da Feira</span>
                    <span class="year">1931-1933</span>
                </div>
                <img src="../assets/installations/3_feira.jpg" class="installations__item__img" alt="Campo da Feira">
            </figure>

            <figure class="installations__item installations__item--4">
                <div class="installations__item__caption">
                    <span>Campo da Barroca</span>
                    <span class="year">1934-1981</span>
                </div>
                <img src="../assets/installations/4_barroca.jpg" class="installations__item__img" alt="Campo da Barroca">
            </figure>

            <figure class="installations__item installations__item--5">
                <div class="installations__item__caption">
                    <span>Estádio Municipal de Amarante</span>
                    <span class="year">1981-Presente</span>
                </div>
                <img src="../assets/installations/5_estadio.jpg" class="installations__item__img" alt="Estádio Municipal de Amarante">
            </figure>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'installations' })
export default class Installations extends Vue {}
</script>

<style lang="scss">
    .installations {
        padding: 8rem;

        &__container {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: repeat(14, 5vw);
            grid-gap: 1.5rem;
        }

        &__item {
            cursor: pointer;
            position: relative;

            &__img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &__caption {
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

                &:hover {
                    background: #333;
                }

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
                grid-row: 9 / -1;
            }
        }
    }
</style>
