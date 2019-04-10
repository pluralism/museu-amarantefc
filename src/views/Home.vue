<template>
  <div class="container">
    <Header />
    
    <div class="content">
      <main>
        <History v-if="currentPage === 'history'" />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import History from '@/views/History.vue';

import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Component({
  components: { History, Header, Footer },
})
export default class Home extends Vue {
  data() {
    return {
      currentPage: 'history'
    };
  }
}
</script>

<style lang="scss">
  .container {
    max-width: 160rem;
    margin: 8rem auto;
    background-color: #fff;

    min-height: 100vh;
  }
</style>