<template>
    <div class="gallery">
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
            description: 'Imagem 1',
            src: require('../assets/gallery/gallery1.jpg'),
            alt: 'Imagem 1'
        },
        {
            id: 2,
            description: 'Imagem 2',
            src: require('../assets/gallery/gallery2.jpg'),
            alt: 'Imagem 2'
        },
        {
            id: 3,
            description: 'Imagem 3',
            src: require('../assets/gallery/gallery3.jpg'),
            alt: 'Imagem 3'
        },
        {
            id: 4,
            description: 'Imagem 4',
            src: require('../assets/gallery/gallery4.jpg'),
            alt: 'Imagem 4'
        },
        {
            id: 5,
            description: 'Imagem 5',
            src: require('../assets/gallery/gallery5.jpg'),
            alt: 'Imagem 5'
        },
        {
            id: 6,
            description: 'Imagem 6',
            src: require('../assets/gallery/gallery6.jpg'),
            alt: 'Imagem 6'
        },
        {
            id: 7,
            description: 'Imagem 7',
            src: require('../assets/gallery/gallery7.jpg'),
            alt: 'Imagem 7'
        },
        {
            id: 9,
            description: 'Imagem 9',
            src: require('../assets/gallery/gallery9.jpg'),
            alt: 'Imagem 9'
        },
        {
            id: 10,
            description: 'Imagem 10',
            src: require('../assets/gallery/gallery10.jpg'),
            alt: 'Imagem 10'
        },
    ];
}
</script>

<style lang="scss">
    .gallery {
        padding: 8rem;

        &__container {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(11, 5vw);
            grid-gap: 1.5rem;
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

            &--4 {
                grid-column: 7 / 9;
                grid-row: 1 / 6;
            }

            &--9 {
                grid-column: 1 / 4;
                grid-row: 4 / 7;
            }

            &--6 {
                grid-column: 4 / 7;
                grid-row: 5 / 8;
            }

            &--7 {
                grid-column: 4 / 7;
                grid-row: 8 / 12;
            }

            &--3 {
                grid-column: 7 / 9;
                grid-row: 6 / 9;
            }

            &--10 {
                grid-column: 7 / 9;
                grid-row: 9 / 12;
            }

            &--5 {
                grid-column: 1 / 4;
                grid-row: 7 / 12;
            }
        }

        &__img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
</style>
