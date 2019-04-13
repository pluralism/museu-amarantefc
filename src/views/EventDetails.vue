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

        <div class="event-details__container">
            <div class="event-details__title">
                <h3>Oficina Criativa (p/Famílias)</h3>
            </div>

            <div class="event-details__content">
                <h2 class="event-details__date">14 ABRIL 2019</h2>
                <p>As tradições da Páscoa inspiram a partilha dos melhores sentimentos. Nesta oficina em Domingo de Ramos, a criatividade das crianças e a ajuda dos adultos vai revelar-se em vasos muito curiosos, onde as plantas têm forma de ovo de dragão e as decorações fazem lembrar os melhores sentimentos que unem padrinhos e afilhados. Estas criações até podem resultar numa bela oferta nesta quadra. Concebida e organizada a pensar na participação das famílias, a atividade tem a marca de referência do Serviço Educativo do Museu FC Porto</p>
                <p><b>Horários:</b> 10H30-12H00</p>
                <p><b>Preço:</b> Preço: 5€ por criança + acompanhante. Acompanhante extra: 2.50€</p>
                <p><b>Nota:</b> necessária inscrição prévia até às 12h00 da 5.ª feira anterior à oficina.</p>
            </div>

            <div class="event-details__place">
                <h5>Local</h5>
                <h3>Museu FC Porto - Terra do Dragão</h3>
            </div>
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

        &__container {
            margin-top: 7rem;
        }

        &__title {
            font-size: 2.5rem;
            font-weight: 600;
            padding-left: 5rem;
            border-left: 2px solid #2c272f;
        }

        &__content {
            margin-top: 6rem;
            padding-left: 5rem;
            border-left: 2px solid hsla(278,4%,58%,.1);

            & > p {
                font-size: 1.5rem;
                line-height: 3rem;
                margin-top: 3rem;

                & > b {
                    text-transform: uppercase;
                }
            }
        }

        &__date {
            font-size: 2rem;
            text-transform: uppercase;
        }

        &__place {
            margin-top: 6rem;
            padding-left: 5rem;
            border-left: 2px solid hsla(278,4%,58%,.1);

            & > h5 {
                font-size: 1.5rem;
                font-weight: 400;
                text-transform: uppercase;
            }

            & > h3 {
                font-size: 2rem;
            }
        }
    }
</style>