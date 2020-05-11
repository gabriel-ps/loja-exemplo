<template>
  <div
    class="card"
    :class="{'card--show-back': showBack}"
  >
    <div
      class="card__side card__side--front"
      :class="{
        'card__side--front-known': known,
        'card__side--front-unknown': !known
      }"
    >
      <div class="card__info card__info--type">{{ creditCard.type }}</div>
      <div class="card__info card__info--number">{{ creditCard.number }}</div>
      <div class="card__info card__info--name">{{ creditCard.name }}</div>
      <div class="card__info card__info--expiration-date">{{ creditCard.expirationDate }}</div>
    </div>
    <div
      class="card__side card__side--back"
      :class="{
        'card__side--back-known': known,
        'card__side--back-unknown': !known
      }"
    >
      <div class="card__info card__info--cvv">{{ creditCard.cvv }}</div>
    </div>
  </div>
</template>

<script>
import CreditCard from '../domain/CreditCard'

export default {
  props: {
    creditCard: {
      type: CreditCard
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    known () {
      return !!this.creditCard.type
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';
@import '@/assets/sass/abstracts/_mixins';

.card {
  width: 36.4rem;
  height: 22.38rem;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: absolute;
  right: -10%;
  z-index: 10;

  @include respond-small {
    left: 50%;
    transform: translateX(-50%);
  }

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
    background-size: cover;

    // display: flex;
    // flex-direction: column;

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

  &--show-back &__side--front {
    transform: rotateY(-180deg);
  }

  &--show-back &__side--back {
    transform: rotateY(0);
  }

  &__info {
    position: absolute;
    font-size: 1.8rem;

    &--type {
      left: 4rem;
      top: 2.5rem;
    }
    &--number {
      left: 4rem;
      top: 9.5rem;
      letter-spacing: 2.31px;
    }
    &--name {
      left: 4rem;
      top: 15.5rem;
    }

    &--expiration-date {
      left: 27rem;
      top: 15.5rem;
    }

    &--cvv {
      top: 10.4rem;
      left: 18rem;
      color: #3C3C3C;
    }
  }
}
</style>
