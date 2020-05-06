<template>
  <footer class="footer">
    <app-container class="footer__container">
      &copy; 2020. All Rights Reserved.
    </app-container>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables';

.footer {
  font-size: $default-font-size;

  &__container {
    display: flex;
    justify-content: center;
  }
}
</style>
