<template>
    <div class="presidents-list">
        <div class="presidents-list__header">
            <h1 class="presidents-list__header__title">
                Presidentes do Amarante FC
            </h1>
        </div>

        <section class="presidents-list__table">
            <div class="presidents-list__table__head">
                <div class="presidents-list__table__head__period">
                    <span>Período</span>
                </div>
                <div class="presidents-list__table__head__name">
                    <span>Nome</span>
                </div>
            </div>

            <div class="presidents-list__table__body">
                <div class="presidents-list__table__row" v-for="president of presidents">
                    <div>{{ president.interval }}</div>
                    <div>{{ president.name }}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({ name: 'presidentsList' })
    export default class PresidentsList extends Vue {
        data() {
            return {
                presidents: [
                    {
                        interval: '1923',
                        name: 'Pompeu da Cunha Brochado'
                    },
                    {
                        interval: '1924',
                        name: 'Adelino Bacelar Furtado'
                    },
                    {
                        interval: '1925/26',
                        name: 'António Mendes Vahia de Sousa Carneiro'
                    },
                    {
                        interval: '1931/33',
                        name: 'José Ribeiro Moreira'
                    }
                ]
            };
        }
    }
</script>

<style lang="scss">
    .presidents-list {
        padding: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__header {
            position: relative;
            padding-bottom: 4.5rem;

            h1 {
                font-size: 2.4rem;
            }

            &::after {
                position: absolute;
                content: "";
                width: 8rem;
                height: .2rem;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background: #000;
            }
        }

        &__table {
            width: 100%;
            padding-top: 4.5rem;

            &__head {
                width: 100%;
                display: flex;
                border-bottom: 1rem solid #ccc;
                font-size: 2rem;
                text-transform: uppercase;


                &__period {
                    flex-basis: 50%;
                    text-align: center;
                }

                &__name {
                    flex-basis: 50%;
                    text-align: center;
                }
            }

            &__row {
                height: 3rem;
                display: flex;
                border-bottom: 1px solid #ccc;

                & > div {
                    flex-basis: 50%;
                    text-align: center;
                    align-self: center;
                    font-size: 1.6rem;
                }
            }
        }
    }
</style>