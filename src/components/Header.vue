<template>
    <header class="header">
      <nav class="menu">
        <ul class="menu-nav">
          <li class="menu-nav__item">
            <span>O Museu</span>
          </li>

          <li class="menu-nav__item">
            <span>Eventos</span>

            <div class="submenu">
              <ul class="submenu-nav">
                <li class="submenu-nav__item">
                  <span>2019</span>
                </li>

                <li class="submenu-nav__item">
                  <span>2018</span>
                </li>

                <li class="submenu-nav__item">
                  <span>2017</span>
                </li>
              </ul>
            </div>
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

    .submenu {
      z-index: 2;
      visibility: hidden;
      opacity: 0;
      
      position: absolute;
      top: 0;
      margin-top: 3.5rem;
      background-color: #191919;
      transform: translateY(-2rem);
      transition: all .3s ease-in-out .3s;

      &-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        padding: 3rem;

        &__item {
          cursor: pointer;
          width: 100%;
          padding-top: 1rem;
          font-size: 1.8rem;
          color: #fff;
          transition: all .2s ease-in-out;

          &:hover {
            color: #ccc;
          }
        }
      }
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
              display: flex;
              justify-content: center;

              position: relative;
              font-weight: 600;
              text-transform: uppercase;
              color: #969199;

              &:hover {
                & > .submenu {
                  visibility: visible;
                  opacity: 1;
                  transform: translateY(0%);
                }
              }

                & > span {
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
