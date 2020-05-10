<template>
  <div class="card">
    <div
      class="card__side card__side--front"
      :class="{
        'card__side--front-known': known,
        'card__side--front-unknown': !known
      }"
    >
    </div>
    <div
      class="card__side card__side--back"
      :class="{
        'card__side--back-known': known,
        'card__side--back-unknown': !known
      }"
    >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      known: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';

.card {
  width: 36.4rem;
  height: 22.38rem;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: absolute;
  right: -10%;

  &__side {
    height: 100%;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
    overflow: hidden;

    &--front {
      &-known {
        background-image: url('~@/assets/images/payment/card-front-known.svg')
      }
      &-unknown {
        background-image: url('~@/assets/images/payment/card-front-unknown.svg')
      }
    }
    &--back {
      transform: rotateY(180deg);

      &-known {
        background-image: url('~@/assets/images/payment/card-back-known.svg')
      }
      &-unknown {
        background-image: url('~@/assets/images/payment/card-back-unknown.svg')
      }
    }
  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }
}
</style>
