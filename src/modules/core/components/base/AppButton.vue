<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';

.button {
  cursor: pointer;
  border-radius: 10px;
  background: $color-primary;
  color: $color-secondary;
  border: none;
  font-size: 2.2rem;
  padding: 1.6rem 8rem;
  outline: none;

  &:hover {
    background: darken($color-primary, 10%);
  }
  &:active {
    background: darken($color-primary, 20%);
  }
}
</style>
