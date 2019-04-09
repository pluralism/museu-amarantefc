<template>
    <footer class="footer">
        <div class="footer__logo-box">
          <picture class="footer__logo">
            <img src="../assets/logo_museu.png">
          </picture>
        </div>

        <div class="footer__contact-box">
          <ul class="footer__contact-list">
            <li>
              <div class="contact-title">
                <span>Secretaria do AFC</span>
              </div>

              <div class="contact-description">
                <span>Estádio Municipal</span>
                <span>Av.Teixeira de Pascoaes</span>
                <span>4600-632 Gatão</span>
              </div>
            </li>

            <li>
              <div class="contact-title">
                <span>Receção de correspondência</span>
              </div>

              <div class="contact-description">
                <span>Apartado 298</span>
                <span>4601-909 Amarante</span>
              </div>
            </li>

            <li>
              <div class="contact-title">
                <span>Outros Contactos</span>
              </div>

              <div class="contact-description">
                <span>Telefone/Fax: +351 255 425 493</span>
                <span>Telemóvel: +351 964 819 490</span>
              </div>
            </li>

            <li>
              <div class="contact-title">
                <span>Endereços de e-mail</span>
              </div>

              <div class="contact-description">
                <span>Geral: <a class="contact-email" href="mailto:amarantfclube@sapo.pt">amarantfclube@sapo.pt</a></span>
                <span>Gonçalinhos: <a class="contact-email" href="mailto:goncalinhos@amarantefc.pt">goncalinhos@amarantefc.pt</a></span>
                <span>Secção de Montanhismo: <a class="contact-email" href="mailto:afcmontanhismo@sapo.pt">afcmontanhismo@sapo.pt</a></span>
              </div>
            </li>
          </ul>
        </div>
    </footer>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
    .footer {
      background-color: #333;
      padding: 10rem 0;
      color: #f7f7f7;
      font-size: 1.4rem;

      &__logo-box {
        text-align: center;
        margin-bottom: 8rem;
      }

      &__logo {
       & > img {
          width: 25rem;
          height: auto;
        }
      }

      &__contact-box {
        width: 80%;
        margin: 0 auto;
        border-top: 1px solid #777;
        padding-top: 2rem;
      }

      &__contact-list {
        list-style: none;
        display: flex;
        justify-content: space-between;

        li {
          .contact-title {
            span {
              font-size: 1.6rem;
              font-weight: 600;
            }
          }

          .contact-description {
            display: flex;
            flex-direction: column;
          }

          .contact-email {
            color: #aaa;
            text-decoration: none;
          }
        }
      }
    }
</style>
