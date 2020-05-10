<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    class="link"
  >
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
    class="link"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  &:link,
  &:visited {
    text-decoration: none;
  }
}
</style>
