<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from './layoutHelper'

const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
  background: {
    type: String,
    default: '/brand/bg-default.jpg',
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div
    class="slidev-layout two-columns relative w-full h-full grid grid-cols-2"
    :class="props.layoutClass"
    :style="style"
  >
    <BrandLogo variant="dark" />
    <div class="col-left relative z-1" :class="props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="col-right relative z-1" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>
