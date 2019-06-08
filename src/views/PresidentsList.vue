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
                    },
                    {
                        interval: '1934/35',
                        name: 'António Mendes Vahia de Sousa Carneiro'
                    },
                    {
                        interval: '1935/36',
                        name: 'Abelâmio Augusto da Silva'
                    },
                    {
                        interval: '1936/37',
                        name: 'Manuel Pereira'
                    },
                    {
                        interval: '1938',
                        name: 'José Martins Branco'
                    },
                    {
                        interval: '1938/39',
                        name: 'Orlando Falcão'
                    },
                    {
                        interval: '1939/40',
                        name: 'António Vieira'
                    },
                    {
                        interval: '1940/42',
                        name: 'Olímpio Saraiva'
                    },
                    {
                        interval: '1944',
                        name: 'Manuel Lobo da Silveira (Alvito)'
                    },
                    {
                        interval: '1945-1946',
                        name: 'Amadeu Faria'
                    },
                    {
                        interval: '1947-1948',
                        name: 'Manuel van Zeller Macedo'
                    },
                    {
                        interval: '1949',
                        name: 'Teófilo da Mota Freitas'
                    },
                    {
                        interval: '1950',
                        name: 'Luís van Zeller Macedo'
                    },
                    {
                        interval: '1951 - 1952/53',
                        name: 'José Soares de Queirós'
                    },
                    {
                        interval: '1953/54',
                        name: 'José Bernardino Monteiro de Moura Basto'
                    },
                    {
                        interval: '1954/55',
                        name: 'Amadeu Cerqueira da Silva'
                    },
                    {
                        interval: '1955/57',
                        name: 'Joaquim Guedes de Magalhães'
                    },
                    {
                        interval: '1957/58',
                        name: 'Alberto Mário Coelho Marinho de Faria'
                    },
                    {
                        interval: '1958/59',
                        name: 'António Cerqueira Vahia'
                    },
                    {
                        interval: '1959/60',
                        name: 'Pedro da Silva e Sousa'
                    },
                    {
                        interval: '1960/61',
                        name: 'António Bento Soares'
                    },
                    {
                        interval: '1961/62',
                        name: 'José Nisolino Ribeiro Pinto Leite'
                    },
                    {
                        interval: '1962/63',
                        name: 'Pedro da Silva e Sousa'
                    },
                    {
                        interval: '1963/64',
                        name: 'António Vieira'
                    },
                    {
                        interval: '1964/67',
                        name: 'Felisberto Augusto Gonçalves de Abreu'
                    },
                    {
                        interval: '1967/68',
                        name: 'Américo António'
                    },
                    {
                        interval: '1968/69',
                        name: 'Pedro da Silva e Sousa'
                    },
                    {
                        interval: '1969/70',
                        name: 'Amílcar Lopes Machado'
                    },
                    {
                        interval: '1970/71',
                        name: 'Ilídio Torres Teixeira'
                    },
                    {
                        interval: '1971/73',
                        name: 'Amílcar Lopes Machado'
                    },
                    {
                        interval: '1973/74',
                        name: 'José Cândido Ribeiro da Silva'
                    },
                    {
                        interval: '1974/75',
                        name: 'Amílcar Lopes Machado'
                    },
                    {
                        interval: '1975/81',
                        name: 'Ramiro Vieira Pinto'
                    },
                    {
                        interval: '1981/82',
                        name: 'Jaime Modesto Magalhães dos Santos'
                    },
                    {
                        interval: '1982/84',
                        name: 'Artur Pereira'
                    },
                    {
                        interval: '1984/87',
                        name: 'António Teixeira da Silva'
                    },
                    {
                        interval: '1987/88',
                        name: 'Alexandre Machado'
                    },
                    {
                        interval: '1988/90',
                        name: 'José Manuel Pinto Moreira'
                    },
                    {
                        interval: '1990/91',
                        name: 'Maximino Pinheiro da Silva'
                    },
                    {
                        interval: '1991/92',
                        name: 'António Jorge Pereira da Silva'
                    },
                    {
                        interval: '1992/97',
                        name: 'Jorge Augusto Queirós Monteiro'
                    },
                    {
                        interval: '2006/08',
                        name: 'Joaquim Moreira Ferreira'
                    },
                    {
                        interval: '2008/09',
                        name: 'António Mendes Cardoso'
                    },
                    {
                        interval: '2009/2013',
                        name: 'Eduardo Jorge Medeiros Pinto'
                    },
                    {
                        interval: '2013/19',
                        name: 'António Augusto Magalhães Duarte'
                    },
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