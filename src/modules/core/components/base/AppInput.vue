<template>
  <div class="input-wrapper" :class="{ 'has-error': hasError }">
    <label
      v-if="label"
      class="label"
      :for="'input-' + scopeId"
    >{{ label }}</label>
    <input
      :id="'input-' + scopeId"
      :type="type"
      class="input"
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
      v-on="$listeners"
    />
    <p
      v-if="hasError && errorMessage"
      class="error-message"
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
</style>
