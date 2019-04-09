<template>
    <header class="header">
      <nav class="menu">
        <ul class="menu-nav">
          <li class="menu-nav__item">
            <span>O Museu</span>
          </li>

          <li class="menu-nav__item">
            <span>Agenda</span>
          </li>

          <img class="logo" src="../assets/logo_museu.png" alt="Logo Museu">

          <li class="menu-nav__item">
            <span>Galeria</span>
          </li>

          <li class="menu-nav__item">
            <span>Notícias</span>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
    .header {
        font-size: 1.5rem;
        height: 9rem;
        background-color: #191919;
    }
    
    .menu {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
            width: 10rem;
            height: 6rem;
        }

        .menu-nav {
            position: relative;
            width: 80%;
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;

            &__item {
                font-weight: 600;
                text-transform: uppercase;
                color: #969199;

                span {
                    position: relative;
                    cursor: pointer;
                    transition: color .3s cubic-bezier(.445, .05, .05, .95);

                    &:hover {
                        color: #fff;

                        &::after {
                        width: 100%;
                        }
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        height: .3rem;
                        width: 0;
                        background-color: #fff;
                        bottom: -1rem;
                        left: 0;

                        transition: width .3s cubic-bezier(.445, .05, .05, .95);
                    }
                }
            }
        }
    }
</style>
