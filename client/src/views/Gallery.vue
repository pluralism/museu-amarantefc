<template>
    <div class="gallery">
        <div class="gallery__videos__container">
            <div class="gallery__video__item gallery__video__item--1">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/u7aCs7JDJOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>

            <div class="gallery__video__item gallery__video__item--2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/R7d-c9BUJPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
        </div>

        <hr class="gallery__divider" />

        <div class="gallery__container">
            <figure v-for="image in images" :key="image.id"
            :class="{'gallery__item': true, ['gallery__item--' + image.id]: true}">
                <div class="gallery__item__title">
                    <span>{{ image.description }}</span>
                </div>
                <img :src="image.src" class="gallery__img" :alt="image.alt">
            </figure>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'gallery' })
export default class Gallery extends Vue {
    private images = [
        {
            id: 1,
            description: 'Amarante FC',
            src: require('../assets/gallery/gallery1.png'),
            alt: 'Imagem 1'
        },
        {
            id: 2,
            description: 'Amarante FC',
            src: require('../assets/gallery/gallery2.png'),
            alt: 'Imagem 2'
        },
        {
            id: 3,
            description: 'Amarante FC',
            src: require('../assets/gallery/gallery3.png'),
            alt: 'Imagem 3'
        },
        {
            id: 4,
            description: 'Amarante FC',
            src: require('../assets/gallery/gallery4.png'),
            alt: 'Imagem 4'
        },
        {
            id: 5,
            description: 'Amarante FC',
            src: require('../assets/gallery/gallery5.png'),
            alt: 'Imagem 5'
        },
        {
            id: 6,
            description: 'Amarante FC',
            src: require('../assets/gallery/gallery6.png'),
            alt: 'Imagem 6'
        },
    ];
}
</script>

<style lang="scss">
    .gallery {
        padding: 8rem;

        &__divider {
            width: 80%;
            margin: 3rem auto 3rem;
            border-top: 1px solid var(--color-primary);
        }

        &__container {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(8, 5vw);
            grid-gap: 1.5rem;
        }

        &__videos__container {
            display: grid;
            grid-template-columns: 2fr .5fr 2fr;
            justify-items: center;
        }

        &__video__item {
            position: relative;
            padding-bottom: 56.25%;
            width: 100%;
            height: 0;

            & > iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            &--1 {
                grid-column: 1 / 2;
            }

            &--2 {
                grid-column: 3 / -1;
            }
        }

        &__item {
            position: relative;
            cursor: pointer;

            &__title {
                opacity: 0;
                transition: opacity .5s ease-in-out;

                position: absolute;
                color: #fff;
                width: 100%;
                height: 100%;
                text-decoration: none;
                font-weight: 600;
                font-size: 2rem;
                background: rgba(90, 0, 10, 0.4);

                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;

                &:hover {
                    opacity: 1;
                    transition: opacity .5s ease-in-out;

                    & + img {
                        filter: blur(.2rem);
                        transition: filter .5s ease-in-out;
                    }
                }

                & + img {
                    filter: blur(0rem);
                    transition: filter .5s ease-in-out;
                }
            }

            &--1 {
                grid-column: 1 / 4;
                grid-row: 1 / 4;
            }

            &--2 {
                grid-column: 4 / 7;
                grid-row: 1 / 5;
            }

            &--3 {
                grid-column: 7 / 9;
                grid-row: 6 / 9;
            }

            &--4 {
                grid-column: 7 / 9;
                grid-row: 1 / 6;
            }

            &--5 {
                grid-column: 1 / 4;
                grid-row: 4 / 9;
            }

            &--6 {
                grid-column: 4 / 7;
                grid-row: 5 / 8;
            }
        }

        &__img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
</style>
