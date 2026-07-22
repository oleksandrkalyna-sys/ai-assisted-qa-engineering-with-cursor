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
  <div class="slidev-layout qa relative w-full h-full" :style="style">
    <BrandLogo variant="dark" />
    <!-- No position:relative on content — absolute figures anchor to the slide -->
    <div class="qa-content z-1 w-full">
      <slot />
    </div>
  </div>
</template>
