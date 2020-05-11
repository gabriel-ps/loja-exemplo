<template>
  <h1 class="heading-primary">
    <img class="heading-primary__icon" src="@/assets/images/payment/card-icon.svg" alt="card-icon.svg" />
    <div class="heading-primary__text">Adicione um novo cartão de crédito</div>
  </h1>
</template>

<script>
export default {}
</script>

<style lang="scss">
// @import '@/assets/sass/abstracts/_variables';

.heading-primary {
  display: flex;
  align-items: center;

  &__icon {
    height: 8rem;
    width: 8rem;
  }
  &__text {
    font-size: 2.1rem;
    margin-left: 1.5rem;
  }
}
</style>
