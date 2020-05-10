<template>
  <div class="input" :class="{ 'input--error': hasError }">
    <label
      v-if="label"
      class="input__label"
      :for="'input-' + scopeId"
    >{{ label }}</label>
    <input
      :id="'input-' + scopeId"
      :type="type"
      :placeholder="placeholder"
      class="input__el"
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
      v-on="$listeners"
    />
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
    placeholder: {
      type: String,
      default: ''
    },
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

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables';

.input {
  &__el {
    &,
    &:active,
    &:focus {
      width: 100%;
      border: none;
      border-bottom: solid 2px #C9C9C9;
      outline: none;
      font-size: 2.2rem;
      padding: 1rem;

      &::placeholder {
        color: #C9C9C9;
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
