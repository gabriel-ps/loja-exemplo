<template>
  <section class="payment">
    <div class="payment__side payment__side--card">
      <app-container>
        <p>Alterar forma de pagamento</p>

        <heading-primary />

        <credit-card />
      </app-container>
    </div>
    <data class="payment__side payment__side--data">
      <app-steps :steps="steps" :current="1" />
      <!-- <div class="steps">
        <div class="steps__step">1 Carrinho</div>
      </div> -->
      <form class="card-data" @submit.prevent="">
        <app-input
          label="Número do cartão"
          :hasError="true"
          errorMessage="Inválido"
        />

        <div class="two-cols">
          <app-input class="two-cols__col" label="Nome (igual ao cartão)" />
          <app-input class="two-cols__col" label="Nome (igual ao cartão)" />
        </div>

        <app-input label="Nome (igual ao cartão)" />
        <app-input label="Nome (igual ao cartão)" />

        <app-button class="f-right">Continuar</app-button>
      </form>
    </data>
  </section>
</template>

<script>
import HeadingPrimary from './HeadingPrimary'
import CreditCard from './CreditCard'

export default {
  components: {
    HeadingPrimary,
    CreditCard
  },
  data () {
    return {
      steps: [
        'Carrinho',
        'Pagamento',
        'Confirmação'
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';

.two-cols{
  display: flex;
  justify-content: space-between;

  &__col {
    width: 48%;
  }
}

.card-data {
  margin-top: 5rem;
  // .input:not(:last-child) {
  .input {
    margin-bottom: 4rem;;
  }
}

.payment {
  display: flex;
  background: $color-secondary;
  margin: 7rem 0;

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
