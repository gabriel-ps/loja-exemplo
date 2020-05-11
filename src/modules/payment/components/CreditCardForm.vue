<template>
  <form class="card-data" @submit.prevent="">
    <app-input
      label="Número do cartão"
      :value="creditCard.number"
      @update="$emit('card-update', {key: 'number', value: $event});
               $emit('card-update', {key: 'type', value: type})"
      :hasError="!validNumber"
      errorMessage="Número de cartão inválido"
    />
    <app-input
      label="Nome (igual ao cartão)"
      :value="creditCard.name"
      @update="$emit('card-update', {key: 'name', value: $event})"
      :hasError="!creditCard.name.length"
      errorMessage="Número de cartão inválido"
    />

    <div class="two-cols">
      <app-input
        class="two-cols__col"
        label="Validade"
        :value="creditCard.expirationDate"
        @update="$emit('card-update', {key: 'expirationDate', value: $event})"
      />
      <app-input
        class="two-cols__col"
        label="CVV"
        :value="creditCard.cvv"
        @update="$emit('card-update', {key: 'cvv', value: $event})"
        @focus="$emit('showBack', true)"
        @blur="$emit('showBack', false)"
      />
    </div>

    <app-input label="Número de parcelas" />

    <app-button class="f-right">Continuar</app-button>
  </form>
</template>

<script>
import cardValidator from 'card-validator'
import CreditCard from '../domain/CreditCard'

export default {
  props: {
    creditCard: {
      type: CreditCard
    }
  },
  computed: {
    numberValidation () {
      return cardValidator.number(this.creditCard.number)
    },
    validNumber () {
      return this.numberValidation.isPotentiallyValid
    },
    type () {
      // console.log(this.numberValidation.card)
      return this.numberValidation.card ? this.numberValidation.card.niceType : null
    }
  }
}
</script>

<style lang="scss">
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
</style>
