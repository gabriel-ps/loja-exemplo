<template>
  <div id="app" class="app">
    <the-header />
    <main class="app__main">
      <app-container>
        <router-view />
      </app-container>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/modules/core/components/layout/TheHeader'
import TheFooter from '@/modules/core/components/layout/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/main';

.app {
  background-color: $color-main-section;
  /* &__main {
    background-color: $color-main-section;
  } */
}
</style>
