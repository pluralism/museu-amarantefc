<template>
    <div class="history">
        <div class="history__header">
            <img class="history__header--logo" src="../assets/logo_amarantefc.png" alt="Amarante FC">
            <div class="history__header--intro">
                <p>Nesta página poderá ler sobre a história do <i>Amarante FC</i> desde o seu ano de fundação (1923) até à atualidade.</p>
            </div>
        </div>

        <div class="history__timeline">
            <ul class="history__timeline__list">
                <li v-for="(item, index) in historyItems" class="history__timeline__list__item" :key="index">
                    <h5>{{ item.year }}</h5>

                    <div class="history__timeline__list__item__container">
                        <div class="text">
                          <p>{{ item.text }}</p>
                        </div>

                        <div class="image">
                          <img :src="item.image" alt="Timeline Image">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'history' })
export default class History extends Vue {
  private historyItems = [
    {
      year: 1923,
      text: 'No dia 4 de março, é fundado o Amarante FC por intermédio de Pompeu da Cunha Brochado, com apenas 19 anos. A 31 de maio realiza o Clube o primeiro encontro de futebol. Foi adversário o Stª. Natália, no qual saiu vencedor por 4-0',
      image: require('../assets/history/1-min.jpg')
    },
    {
      year: 1935,
      text: 'Filia-se pela primeira vez na Associação de Futebol do Porto em 1934. Sagra-se campeão regional da Associação de Futebol do Porto na época de 1934/35.',
      image: require('../assets/history/4-min.png')
    },
    {
      year: 1944,
      text: 'Sem competir dois anos, reaparece o Amarante FC, em 23 de janeiro. Sob a presidência de D. Manuel Lobo da Silveira (Alvito) e filia-se novamente na AFP.',
      image: require('../assets/history/5-min.jpg')
    },
    {
      year: 1953,
      text: 'O Amarante Futebol Clube sobe da 3ª Div. da AFP à 2ª Divisão Distrital, com o título de campeão.',
      image: require('../assets/history/6.jpg')
    },
    {
      year: 1964,
      text: 'Torna a subir de escalão o Clube. Agora da 2ª à 1ª Divisão Distrital, novamente com o título de campeão.',
      image: require('../assets/history/7.jpg')
    },
    {
      year: 1966,
      text: 'Participa uma vez mais na I Divisão Distrital e conquista o primeiro lugar na série que competiu. Após obter este título disputou pela primeira vez e última neste ano a III Divisão Nacional, que era disputado pelos primeiros classificados das séries dos campeonatos regionais. O primeiro lugar dava acesso à II Divisão Nacional na época seguinte.',
      image: require('../assets/history/8-min.jpg')
    },
    {
      year: 1977,
      text: 'Ao fim trinta e nove épocas de competição em campeonatos distritais desde a sua fundação. O Amarante FC sobe uma vez mais. Após disputar a 1ª Divisão Distrital sagra-se novamente campeão e consequentemente o direito de competir na 3ª Divisão Nacional. Estava conseguido um desígnio antigo.',
      image: require('../assets/history/9-min.jpg')
    },
    {
      year: 1979,
      text: 'Ao subir da 3ª para a 2ª Divisão Nacional, o Amarante FC ascende ao patamar em termos de competição mais alto da sua história. Conseguiu também a proeza inédita, até hoje de disputar por três épocas este campeonato ininterruptamente. No dia 1 de dezembro, atinge na Taça de Portugal um dos momentos mais importantes de afirmação do Clube, ao empatar no campo da Barroca por 1-1 frente ao Sporting CP. Obrigando a equipa leonina ao jogo de desempate em Alvalade.',
      image: require('../assets/history/10-min.jpg')
    },
    {
      year: 1985,
      text: 'Após se sagrar campeão da 3ª Divisão-Série B, sobe uma novamente o AFC à 2ª Divisão Nacional.',
      image: require('../assets/history/12-min.jpg')
    },
    {
      year: 1988,
      text: 'Repete uma vez mais a subida à 2ª Divisão Nacional.',
      image: require('../assets/history/13-min.jpg')
    },
    {
      year: 1990,
      text: 'Neste ano dá-se uma restruturação dos campeonatos nacionais, o Amarante FC que disputou a 3ª Div., consegue o acesso ao campeonato Nacional da 2ª Divisão B zona Norte.',
      image: require('../assets/history/14-min.jpg')
    },
    {
      year: 1994,
      text: 'O AFC sobe da 3ª Divisão Nacional-Série B, para a 2ª Divisão B zona Norte.',
      image: require('../assets/history/1994.png')
    },
    {
      year: 1998,
      text: 'De volta por uma época à 1ª Div. AFP, consegue este ano o Amarante FC a subida ao campeonato nacional da 3ª Divisão.',
      image: require('../assets/history/15.jpg')
    },
    {
      year: 2006,
      text: 'Ao conseguir o título de campeão no Campeonato Distrital da AF Porto – Divisão de Honra, ascende novamente à 3ª Div. Nacional.',
      image: require('../assets/history/2006.png')
    },
    {
      year: 2008,
      text: 'Depois de disputar a 3ª Div. Nacional-Série B, sobe à 2ª Div. Nacional-Série B.',
      image: require('../assets/history/18-min.jpg')
    },
    {
      year: 2011,
      text: 'Após disputar a 3ª Div. Nacional-Série B, torna o AFC à 2ª Div. Nacional que era dividida pela zona norte, centro e sul. Posteriormente em 2013, o campeonato é designado por Campeonato Nacional de Seniores, estando a competição dividida por séries. Entretanto dá-se uma nova transformação a partir de 2015, denominando-se em Campeonato de Portugal, que atualmente disputa.',
      image: require('../assets/history/19-min.jpg')
    },
    {
      year: 2015,
      text: 'O Amarante Futebol Clube disputa pela primeira vez aos oitavos de final da Taça de Portugal, contra o FC Arouca. O encontro realizado no Estádio Municipal de Amarante, teve o resultado de 1-2.',
      image: require('../assets/history/20.jpg')
    }
  ];
}
</script>


<style lang="scss">
    @mixin timelineBar($padding) {
        position: absolute;
        content: "";
        display: block;
        width: .2rem;
        height: calc(100% + #{$padding} * 1rem);
        top: 0;
        right: 0;
        background: var(--color-primary);
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
                font-weight: 400;
                font-size: 1.4rem;
                color: #2c272f;
              }

              .image {
                position: relative;
                width: 50%;
                max-height: 40rem;
                padding: 2.4rem 2rem;

                display: flex;
                justify-content: center;
                align-items: center;

                & > img {
                  max-height: 100%;
                  object-fit: contain;
                }
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

              &:last-of-type {
                .history__timeline__list__item__container {
                  .image::after {
                    @include timelineBar(0);
                  }
                }
              }

              .history__timeline__list__item__container {
                .text {
                  order: 1;
                }

                .image {
                  order: 0;

                  &::after {
                    @include timelineBar(3);
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

              &:last-of-type {
                .history__timeline__list__item__container {
                  .text::after {
                    @include timelineBar(0);
                  }
                }
              }

              .history__timeline__list__item__container {
                .text {
                  order: 0;

                  &::after {
                    @include timelineBar(3);
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
