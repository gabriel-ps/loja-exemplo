<template>
  <section class="payment">
    <div class="payment__card-side">
      <app-container>
        <p>Alterar forma de pagamento</p>

        <heading-primary />

        <credit-card />
      </app-container>
    </div>
    <data class="payment__data-side">
      <app-steps :steps="steps" />
      <!-- <div class="steps">
        <div class="steps__step">1 Carrinho</div>
      </div> -->
      <form class="card-data" @submit.prevent="">
        <app-input
          placeholder="Número do cartão"
          :hasError="true"
          errorMessage="Invalido"
        />

        <div class="two-cols">
          <app-input class="two-cols__col" placeholder="Nome (igual ao cartão)" />
          <app-input class="two-cols__col" placeholder="Nome (igual ao cartão)" />
        </div>

        <app-input placeholder="Nome (igual ao cartão)" />
        <app-input placeholder="Nome (igual ao cartão)" />

        <app-button>Continuar</app-button>
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
  // .input:not(:last-child) {
  .input {
    margin-bottom: 4rem;;
  }
}

.payment {
  display: flex;
  background: $color-secondary;

  &__card-side {
    position: relative;
    background: $color-primary;
    color: $color-secondary;
    width: 34%;
    padding-left: 7.5rem;
  }

  &__data-side {
    width: 66%;
    padding: 5rem 5rem 5rem 14.5rem;
  }
}
</style>
