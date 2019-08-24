<template>
  <header class="header">
    <nav class="menu">
      <ul class="menu-nav">
        <li class="menu-nav__item">
          <router-link tag="div" class="menu-nav__item__header" to="/history">
            <span>O Museu</span>
          </router-link>

          <div class="submenu">
            <ul class="submenu-nav">
              <li class="submenu-nav__item">
                <router-link tag="div" to="/history">
                  <span>História</span>
                </router-link>
              </li>

              <li class="submenu-nav__item">
                <router-link tag="div" to="/installations">
                  <span>Instalações</span>
                </router-link>
              </li>

              <li class="submenu-nav__item">
                <router-link tag="div" to="/presidents">
                  <span>Presidentes</span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="menu-nav__item">
          <router-link tag="div" class="menu-nav__item__header" to="/schedule">
            <span>Eventos</span>
          </router-link>

          <div class="submenu">
            <ul class="submenu-nav">
              <li class="submenu-nav__item">
                <span>2019</span>
              </li>
            </ul>
          </div>
        </li>

        <img class="logo" src="../assets/logo_museu.png" alt="Logo Museu" />

        <li class="menu-nav__item">
          <router-link tag="div" class="menu-nav__item__header" to="/gallery">
            <span>Galeria</span>
          </router-link>
        </li>

        <li class="menu-nav__item">
          <router-link tag="div" class="menu-nav__item__header" to="/history">
            <span>Notícias</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
  transition: all 0.3s ease-in-out 0.3s;

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
      transition: all 0.2s ease-in-out;

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

      &__header {
        & > span {
          position: relative;
          cursor: pointer;

          transition: color 0.3s cubic-bezier(0.445, 0.05, 0.05, 0.95);

          &:hover {
            color: #fff;

            &::after {
              width: 100%;
            }
          }

          &::after {
            content: "";
            position: absolute;
            height: 0.3rem;
            width: 0;
            background-color: #fff;
            bottom: -1rem;
            left: 0;

            transition: width 0.3s cubic-bezier(0.445, 0.05, 0.05, 0.95);
          }
        }
      }
    }
  }
}
</style>
