<template>
  <div class="container">
    <Header />
    
    <div class="content">
      <main>
        <component :is="currentPage"></component>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Home from '@/views/Home.vue';
import History from '@/views/History.vue';
import Schedule from '@/views/Schedule.vue';
import EventDetails from '@/views/EventDetails.vue';
import Gallery from '@/views/Gallery.vue';

import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Component({
  components: { Home, History, Schedule, EventDetails, Gallery, Header, Footer },
})
export default class Main extends Vue {
  data() {
    return {
      currentPage: 'home'
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