<template>
  <header class="header">
    <app-container class="header__container">
      <img src="@/assets/images/header/group-2290.svg" alt="group-2290.svg" />
      <nav class="header__nav">
        <app-link href="#" class="header__nav__item">Home</app-link>
        <app-link href="#" class="header__nav__item">Sobre nós</app-link>
        <app-link href="#" class="header__nav__item">Serviços</app-link>
        <app-link href="#" class="header__nav__item">Eventos</app-link>
        <app-link href="#" class="header__nav__item">Contato</app-link>
      </nav>
    </app-container>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';
@import '@/assets/sass/abstracts/_mixins';

.header {
  padding: 3rem 0;
  background-color: $color-secondary;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__item {
      margin: 0 1.8rem;
      text-transform: uppercase;
      color: #3C3C3C;
      font-weight: 700;
      font-size: $default-font-size;
    }

    @include respond-ext-small {
      display: none;
    }
  }
}
</style>
