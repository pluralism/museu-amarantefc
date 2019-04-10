<template>
    <div class="history">
        <div class="history__header">
            <img class="history__header--logo" src="../assets/logo_amarantefc.png" alt="Amarante FC">
            <div class="history__header--intro">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere condimentum lectus vitae aliquam. Donec magna sem, pretium sed congue eu, egestas at ligula.</p>
            </div>
        </div>

        <div class="history__timeline">
            <ul class="history__timeline__list">
                <li class="history__timeline__list__item">
                    <h5>1923</h5> 
                    
                    <div class="history__timeline__list__item__container">
                        <div class="text">
                        <p>Pompeu da Cunha Brochado foi o primeiro Presidente do clube, com apenas 19 anos. O campo de jogos do Amarante Futebol Clube, nos anos de 1923 e 1924 foi o campo da Praça. No dia 31 de Maio de 1923, o AFC fez o seu primeiro jogo contra o Santa Natália F.C. em que o Amarante venceu por 4-0.</p>
                        </div>

                        <div class="image">
                        <img src="http://www.pauloteixeira.net/amarantefc/wp-content/uploads/2010/07/logotipo.jpg" alt="Timeline Image">
                        </div>
                    </div>
                </li>

                <li class="history__timeline__list__item">
                    <h5>1924</h5> 
                    
                    <div class="history__timeline__list__item__container">
                        <div class="text">
                        <p>Adelino Bacelar foi eleito Presidente do Clube. Dr. António Vahia foi Presidente do clube para a época 1925/26 e foi sob a sua presidência que o Amarante F.C., em 1925, conseguiu obter dos Serviços Florestais, por intermédio do Dr. Largo Cerqueira, e com o melhor acolhimento dos Engenheiros Florestais Luiz Virgolino, Rocha e Reimão, a cedência de uma faixa de terreno no Parque Florestal, com a superfície de 100 por 60 metros, para o seu campo desportivo.</p>
                        </div>

                        <div class="image">
                        <img src="http://www.pauloteixeira.net/amarantefc/wp-content/uploads/2010/07/0025-campodafeira.jpg" alt="Timeline Image">
                        </div>
                    </div>
                </li>

                <li class="history__timeline__list__item">
                    <h5>1925</h5> 
                    
                    <div class="history__timeline__list__item__container">
                        <div class="text">
                        <p>O AFC joga no campo da Florestal – campo de jogos inaugurado em 12 de Julho de 1925 – um encontro de futebol entre o Amarante F.C. e o Voluntário F.C. de Vila Real. O resultado foi de 4-3, favorável ao Amarante.</p>
                        </div>

                        <div class="image">
                        <img src="http://www.pauloteixeira.net/amarantefc/wp-content/uploads/2010/07/0035-equipa32_33.jpg" alt="Timeline Image">
                        </div>
                    </div>
                </li>

                <li class="history__timeline__list__item">
                    <h5>1931</h5> 
                    
                    <div class="history__timeline__list__item__container">
                        <div class="text">
                        <p>Tenente Manuel Pereira é eleito presidente do clube, para as épocas de 1931/33. As instalações desportivas do Amarante F. C., desde Julho de 1931 até Janeiro de 1934, são no campo da Feira. Depois de um interregno, o Amarante Futebol Clube reaparece em Julho de 1931 contra uma Selecção de Penafiel. O Amarante venceu o desafio por 12 – 0.</p>
                        </div>

                        <div class="image">
                        <img src="http://www.pauloteixeira.net/amarantefc/wp-content/uploads/2010/07/0038-equipa34_35.jpg" alt="Timeline Image">
                        </div>
                    </div>
                </li>

                <li class="history__timeline__list__item">
                    <h5>1944</h5> 
                    
                    <div class="history__timeline__list__item__container">
                        <div class="text">
                        <p>Reaparece o clube em 23 de Janeiro de 1944, depois de um interregno de dois anos. D. Manuel Lobo da Silveira (Alvito), é eleito presidente do clube para o ano de 1944. Amadeu Faria é eleito presidente do clube, para os anos de 1945 e 1946. Inserido nas Festas do Junho de 1945, o Amarante Futebol Clube recebe a Associação Académica de Coimbra.</p>
                        <p>Eng. Manuel Van Zeller Macedo é eleito presidente do clube para os anos de 1947 e 1948. Teófilo da Mota Freitas é eleito presidente do clube para o ano de 1949. Dr. Luís Van Zeller Macedo é eleito presidente do clube para o ano de 1950. Dr. José Soares Queiroz é eleito presidente do clube para o ano de 1951 e para a época 1952/53.</p>
                        </div>

                        <div class="image">
                        <img src="http://www.pauloteixeira.net/amarantefc/wp-content/uploads/2010/07/0032-equipa1952_53.jpg" alt="Timeline Image">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class History extends Vue {}
</script>


<style lang="scss">
    @mixin timelineBar() {
        position: absolute;
        content: "";
        display: block;
        width: .2rem;
        height: calc(100% + 3rem);
        top: 0;
        right: 0;
        background: rgba(0,166,240,.2);
    }

    .history {
      padding: 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__header {
        text-align: center;

        &--logo {
          height: 20rem;
        }

        &--intro {
          position: relative;
          font-size: 2.4rem;
          font-weight: 600;
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;

          &::after {
            position: absolute;
            display: block;
            content: "";
            bottom: 0;
            width: 8rem;
            height: .2rem;
            left: 50%;
            transform: translateX(-50%);
            background: #000;
          }
        }
      }


      &__timeline {
        padding-top: 4.5rem;

        &__list { // "ul" element
          list-style: none;

          &__item { // "li" element
            position: relative;
            padding-bottom: 3rem;

            h5 {
              position: absolute;
              left: 50%;
              font-size: 2.4rem;
              font-weight: 600;
              color: #2c272f;
              margin-top: -1.1rem;
              padding: 0 2rem;
              z-index: 1;

              &::before {
                position: absolute;
                content: "";
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                background: #000;
                top: .6rem;
              }
            }

            &__container { // "div" inside "li"
              display: flex;

              .text {
                position: relative;
                padding: 0 2rem;
                width: 50%;
                text-align: right;
                font-weight: 400;
                font-size: 1.4rem;
                color: #2c272f;
              }

              .image {
                position: relative;
                width: 50%;
                padding: 0 2rem;

                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }

          li {
            &:nth-child(even) {
              h5 {
                transform: translateX(-100%);

                &::before {
                  right: -0.4rem;
                }
              }

              .history__timeline__list__item__container {
                .text {
                  order: 1;
                }

                .image {
                  order: 0;

                  &::after {
                    @include timelineBar();
                  }
                }
              }
            }

            &:nth-child(odd) {
              h5 {
                &::before {
                  left: -0.6rem;
                }
              }

              .history__timeline__list__item__container {
                .text {
                  order: 0;

                  &::after {
                    @include timelineBar();
                  }
                }

                .image {
                  order: 1;
                }
              }
            }
          }
        }
      }
    }
</style>