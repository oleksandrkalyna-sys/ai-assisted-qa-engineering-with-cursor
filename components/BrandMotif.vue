<script setup lang="ts">
withDefaults(defineProps<{
  size?: string
}>(), {
  size: 'h-24',
})
</script>

<template>
  <img
    class="brand-motif absolute bottom-0 left-0 z-0 object-contain opacity-90 pointer-events-none"
    :class="size"
    src="/brand/motif-arc.png"
    alt=""
    aria-hidden="true"
  >
</template>
