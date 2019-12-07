<template>
    <div class="home">
        <div class="home__presentation">
            <div class="home__intro">
                <p class="home__intro-text">
                    Alfa Draconis, Thuban ou, muito simplesmente, Dragão. Da estrela dominante da constelação com o mesmo nome, que envolve o firmamento de uma notável coleção de troféus, derivam o conceito e o símbolo do Museu Futebol Clube do Porto by BMG
                </p>
            </div>

            <div class="home__fulltext">
                <p>
                    Hoje, 4800 anos depois, a constelação do Dragão conquistou a tripla função de evocar episódios históricos absolutamente libertadores para o clube que inspira, de concentrar numa imagem todas as estrelas que vestiram a camisola azul e branca e de servir de referência e guia para novas vitórias. No Estádio do Dragão, o Museu Futebol Clube do Porto by BMG atribui à constelação do Dragão o lugar que lhe pertence por direito, reservando-lhe o teto celeste que domina e ilumina uma coleção particular invejável. No género, nada se lhe compara em Portugal, distinguindo-se, inclusive, como a mais vasta exposição de troféus oficiais e aquela que concentra maior número de exclusivos.
                </p>

                <p>
                    Só aqui podem ser admiradas obras mundialmente aclamadas e desejadas, como a Taça Intercontinental, a versão dos tempos modernos da Taça dos Campeões Europeus, a Taça UEFA ou a Supertaça Europeia.
                </p>

                <div class="home__fulltext-inauguration">
                    <h6>Inauguração</h6>
                    <span class="date">28/09/2013</span>
                </div>
            </div>
        </div>

        <div class="home__directions">
            <div class="home__directions-map">
                <GmapMap
                    :center="{lat:10, lng:10}"
                    :zoom="5"
                    map-type-id="terrain"
                    style="width: 100%; height: 100%">
                </GmapMap>
            </div>

            <div class="home__directions-how-to-get">
                <p>how to get there</p>
                <p>how to get there</p>
                <p>how to get there</p>
                <p>how to get there</p>
                <p>how to get there</p>
                <p>how to get there</p>
                <p>how to get there</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'home' })
export default class Home extends Vue { }
</script>

<style lang="scss">
    .home {
        padding: 8rem 3rem;

        &__presentation {
            display: flex;
            justify-content: center;
        }

        &__intro {
            flex-basis: 30%;
            margin-top: 1rem;
        }

        &__intro-text {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.8;
        }

        &__fulltext {
            flex-basis: 60%;
            margin-left: 3rem;
            font-size: 1.8rem;

            & > p + p {
                margin-top: 3rem;
            }

            &-inauguration {
                margin-top: 3rem;

                & > h6 {
                    font-weight: 300;
                    text-transform: uppercase;
                }

                & > .date {
                    font-size: 2.4rem;
                    font-weight: 600;
                }
            }
        }

        &__directions {
            margin-top: 8rem;
            display: flex;
            height: 100%;

            &-map {
                flex-basis: 60%;
            }

            &-how-to-get {
                flex-basis: 40%;
            }
        }
    }
</style>