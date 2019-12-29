<template>
  <div id="app">
    <div v-if="$store.getters.isLoadingData" class="lds">
      <div class="lds__ripple">
        <div></div>
        <div></div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600");

:root {
  --color-primary: #3c272f;
  --afc-light-brown: #DBB073;
  --afc-primary-color: #202221;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 10px
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-color: var(--color-primary);
}

.lds {
  position: fixed;
  top: calc(50vh - 40px);
  left: calc(50vw - 40px);

  &__ripple {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;

    & > div {
      position: absolute;
      border: 4px solid var(--color-primary);
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    & > div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  
  100% {
    top: 0;
    left: 0;
    height: 72px;
    width: 72px;
    opacity: 0;
  }
}
</style>
