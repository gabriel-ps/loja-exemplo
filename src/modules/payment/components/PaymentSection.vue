<template>
  <section class="payment">
    <div class="payment__side payment__side--card">
      <app-container>
        <p class="go-back">Alterar forma de pagamento</p>

        <heading-primary />

        <credit-card
          :credit-card="creditCard"
          :show-back="showCardBack"
        />
      </app-container>
    </div>
    <data class="payment__side payment__side--data">
      <app-steps :steps="steps" :current="1" />
      <!-- <div class="steps">
        <div class="steps__step">1 Carrinho</div>
      </div> -->
      <credit-card-form
        :credit-card="creditCard"
        @card-update="cardUpdate"
        @showBack="showCardBack = $event"
      />
    </data>
  </section>
</template>

<script>
import HeadingPrimary from './HeadingPrimary'
import CreditCard from './CreditCard'
import CreditCardForm from './CreditCardForm'
import CreditCardData from '../domain/CreditCard'

export default {
  components: {
    HeadingPrimary,
    CreditCard,
    CreditCardForm
  },
  data () {
    return {
      creditCard: new CreditCardData(),
      showCardBack: false,
      steps: [
        'Carrinho',
        'Pagamento',
        'Confirmação'
      ]
    }
  },
  methods: {
    cardUpdate (data) {
      this.creditCard[data.key] = data.value
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';

.go-back {
  font-size: 1.3rem;
}

.payment {
  display: flex;
  background: $color-secondary;
  margin: 7rem 0;

  .heading-primary {
    margin-top: 5rem;
  }

  &__side {
    &--card {
      position: relative;
      background: $color-primary;
      color: $color-secondary;
      width: 34%;
      padding: 5rem 5rem 5rem 7.5rem;
    }

    &--data {
      width: 66%;
      padding: 5rem 5rem 5rem 14.5rem;
    }
  }
}
</style>
