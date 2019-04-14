<template>
    <div class="gallery">
        <div class="gallery__container">
            <figure class="gallery__item gallery__item--1">
                <div class="gallery__item__title">
                    <span>Imagem 1</span>
                </div>
                <img src="../assets/gallery/gallery1.jpg" class="gallery__img" alt="Imagem 1">
            </figure>

            <figure class="gallery__item gallery__item--2">
                <div class="gallery__item__title">
                    <span>Imagem 2</span>
                </div>
                <img src="../assets/gallery/gallery2.jpg" class="gallery__img" alt="Imagem 2">
            </figure>

            <figure class="gallery__item gallery__item--3">
                <div class="gallery__item__title">
                    <span>Imagem 3</span>
                </div>
                <img src="../assets/gallery/gallery3.jpg" class="gallery__img" alt="Imagem 2">
            </figure>

            <figure class="gallery__item gallery__item--4">
                <div class="gallery__item__title">
                    <span>Imagem 4</span>
                </div>
                <img src="../assets/gallery/gallery4.jpg" class="gallery__img" alt="Imagem 2">
            </figure>

            <figure class="gallery__item gallery__item--5">
                <div class="gallery__item__title">
                    <span>Imagem 5</span>
                </div>
                <img src="../assets/gallery/gallery5.jpg" class="gallery__img" alt="Imagem 2">
            </figure>

            <figure class="gallery__item gallery__item--6">
                <div class="gallery__item__title">
                    <span>Imagem 6</span>
                </div>
                <img src="../assets/gallery/gallery6.jpg" class="gallery__img" alt="Imagem 2">
            </figure>

            <figure class="gallery__item gallery__item--7">
                <div class="gallery__item__title">
                    <span>Imagem 7</span>
                </div>
                <img src="../assets/gallery/gallery7.jpg" class="gallery__img" alt="Imagem 2">
            </figure>

            <figure class="gallery__item gallery__item--9">
                <div class="gallery__item__title">
                    <span>Imagem 8</span>
                </div>
                <img src="../assets/gallery/gallery9.jpg" class="gallery__img" alt="Imagem 2">
            </figure>

            <figure class="gallery__item gallery__item--10">
                <div class="gallery__item__title">
                    <span>Imagem 10</span>
                </div>
                <img src="../assets/gallery/gallery10.jpg" class="gallery__img" alt="Imagem 2">
            </figure>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'gallery' })
export default class Gallery extends Vue { }
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
                font-size: 3rem;
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
