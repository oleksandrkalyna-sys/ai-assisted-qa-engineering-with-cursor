<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from './layoutHelper'

const props = defineProps({
  background: {
    type: String,
    default: '/brand/bg-thankyou.jpg',
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout thank-you relative w-full h-full grid place-content-center" :style="style">
    <BrandLogo variant="light" />
    <div class="my-auto relative z-1">
      <slot />
    </div>
  </div>
</template>
