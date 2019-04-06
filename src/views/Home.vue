<template>
  <div class="container">
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

    <div class="content">
      <main>
        <div class="history">
          <div class="history__header">
            <div class="history__header--intro">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere condimentum lectus vitae aliquam. Donec magna sem, pretium sed congue eu, egestas at ligula.</p>
            </div>
          </div>

          <div class="history__timeline">
            <ul>
              <li>
                <h5>2011</h5>
                <div class="history__timeline--item">
                  <div class="text">
                    <p>A época foi absolutamente memorável, com os Dragões a juntar ao título europeu as conquistas da Liga portuguesa (com 21 pontos de avanço sobre o segundo classificado, o Benfica, uma margem recorde), da Taça de Portugal e da Supertaça. O título português – conseguido sem derrotas, algo inédito no clube – foi selado a 3 de abril, com um triunfo por 2-1 no Estádio da Luz, terreno do anterior campeão.</p>
                  </div>

                  <div class="image">
                    <img src="https://files.app.fcporto.pt/sources/5c8d16596431avBEUs2KtWzLqRf9z.png" alt="Timeline Image">
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: { HelloWorld }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .container {
    max-width: 160rem;
    margin: 8rem auto;
    background-color: #fff;

    min-height: 100vh;
  }

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

  .content {
    .history {
      padding: 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__header {
        text-align: center;

        &--intro {
          position: relative;
          font-size: 2.4rem;
          font-weight: 600;
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

        ul {
          list-style: none;  
        }

        li {
          position: relative;

          h5 {
            position: absolute;
            left: 50%;
            font-size: 2.4rem;
            font-weight: 600;
            color: #2c272f;
            margin-top: -1.1rem;
            padding: 0 2rem;

            &::before {
              position: absolute;
              content: "";
              width: 1rem;
              height: 1rem;
              border-radius: 50%;
              background: #000;
              left: -0.6rem;
              top: .6rem;
            }
          }
        }

        &--item {
          display: flex;

          .text {
            position: relative;
            padding: 0 2rem;
            width: 50%;
            text-align: right;
            font-weight: 400;
            font-size: 1.4rem;
            color: #2c272f;

            &::after {
              position: absolute;
              content: "";
              display: block;
              width: .2rem;
              height: 100%;
              top: 0;
              right: 0;
              background: rgba(0,166,240,.2);
            }
          }

          .image {
            width: 50%;
            padding: 0 2rem;
          }
        }
      }
    }
  }
</style>