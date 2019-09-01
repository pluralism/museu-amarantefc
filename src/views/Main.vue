<template>
  <div class="container">
    <Header class="header" />

    <div class="content">
      <main>
        <router-view />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Component({
  components: { Header, Footer }
})
export default class Main extends Vue {
  data() {
    return {};
  }
}
</script>

<style lang="scss">
  .container {
    max-width: 160rem;
    margin: 0 auto;
    background-color: #fff;

    min-height: 100vh;
  }

  .header {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 2;
  }
</style>
