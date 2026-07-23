<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../utils/resolveAssetUrl'

const props = defineProps<{
  src: string
  alt: string
}>()

const resolvedSrc = computed(() => resolveAssetUrl(props.src))
</script>

<template>
  <img
    :src="resolvedSrc"
    :alt="alt"
    class="two-col-figure"
  >
</template>
