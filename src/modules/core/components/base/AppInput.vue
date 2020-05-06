<template>
  <b-form-group
    class="app-input"
    :id="'input-group-' + scopeId"
    :label="label"
    :label-for="'input-' + scopeId"
    :state="state"
  >
    <b-form-input
      :id="'input-' + scopeId"
      :state="state"
      v-bind="$attrs"
      v-on="$listeners"
      class="app-input__input"
      :class="inputClass"
    >
    </b-form-input>
    <b-form-invalid-feedback v-if="errorMessage">
      {{ errorMessage }}
    </b-form-invalid-feedback>
    <slot v-else name="errorMessage" />
  </b-form-group>
</template>

<script>
export default {
  inheritAttrs: false,
  /* model: {
    event: 'update'
  }, */
  data () {
    return {
      scopeId: (new Date()).getTime() + Math.random()
    }
  },
  props: {
    /* type: {
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
    }, */
    label: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    state: {
      type: Boolean,
      default: null
    },
    errorMessage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
</style>
