<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from './layoutHelper'

const props = defineProps({
  background: {
    type: String,
    default: '/brand/bg-default.jpg',
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout default relative w-full h-full" :style="style">
    <BrandLogo variant="dark" />
    <div class="slide-body relative z-1">
      <slot />
    </div>
  </div>
</template>
