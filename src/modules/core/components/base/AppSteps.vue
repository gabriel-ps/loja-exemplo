<template>
  <div class="steps">
    <div
      v-for="(step, i) in steps"
      :key="step"
      class="steps__step"
    >
      <div
        class="img-checked"
        v-if="current === i">
        <img
          src="@/assets/images/payment/checked.svg"
          class="img-checked__img"
        />
      </div>
      <div v-else>{{ i + 1 }}</div>
      <div>{{ step }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default () {
        return []
      }
    },
    current: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/abstracts/_variables';

.img-checked {
  width: 22px;
  height: 22px;
  background: red;
  border-radius: 250rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &__img {

  }
}
.steps {
  display: flex;

  &__step {
    display: flex;
  }
}
</style>
