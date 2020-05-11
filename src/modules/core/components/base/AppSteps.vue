<template>
  <div class="steps">
    <div
      v-for="(step, i) in steps"
      :key="step"
      class="steps__step"
    >
      <div
        class="steps__step__img steps__step__img--checked"
        v-if="current >= i"
      >
        <img
          src="@/assets/images/payment/checked.svg"
        />
      </div>
      <div
        v-else
        class="steps__step__img steps__step__img--unchecked"
      >{{ i + 1 }}</div>
      <div class="steps__step__img-text">{{ step }}</div>
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
@import '@/assets/sass/abstracts/_mixins';

.steps {
  margin: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-primary;
  font-size: 1.6rem;

  @include respond-small {
    display: none;
  }

  &__step {
    display: flex;
    // margin: 0 1rem;
    align-items: center;
    font-weight: bold;

    &__img-text {
      margin-left: 5px;
    }

    &__img {
      width: 22px;
      height: 22px;
      border-radius: 250px;
      display: flex;
      justify-content: center;
      align-items: center;

      &--checked {
        background: $color-primary;
      }
      &--unchecked {
        border: $color-primary solid 2px;
      }
    }
  }
}
</style>
