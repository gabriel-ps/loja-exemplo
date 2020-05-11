<template>
  <div class="input" :class="{ 'input--error': hasError }">
    <input
      :id="'input-' + scopeId"
      :type="type"
      :placeholder="label"
      class="input__el"
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
      v-on="$listeners"
    />
    <label
      v-if="label"
      class="input__label"
      :for="'input-' + scopeId"
    >{{ label }}</label>
    <p
      v-if="hasError && errorMessage"
      class="input__error"
    >{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'update'
  },
  data () {
    return {
      scopeId: Math.random().toString()
    }
  },
  props: {
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return [
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url'
        ].includes(value)
      }
    },
    label: {
      type: String,
      default: ''
    },
    /* placeholder: {
      type: String,
      default: ''
    }, */
    hasError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';

.input {
  position: relative;
  font-size: 2.2rem;

  &__label {
    cursor: text;
    color: $color-light-gray;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .1s ease-in-out;
  }

  &__el {
    &,
    &:active,
    &:focus {
      width: 100%;
      border: none;
      border-bottom: solid 2px $color-light-gray;
      outline: none;
      font-size: inherit;
      padding: 1rem 0;

      &::placeholder {
        color: transparent;
        // display: none;
      }

      &:not(:placeholder-shown) ~ label {
        font-size: 1.3rem;
        top: -16px;
      }
    }
  }
  &--error &__el {
    border-bottom: solid 2px $color-error;
  }

  &__error {
    color: $color-error;
    font-size: 1.8rem;
  }
}
</style>
