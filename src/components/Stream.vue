<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  channel: { type: String, required: true },
  size: { type: Object, required: true }
})

const twitchParent = inject('twitchParent')
const embedURL = computed(() => {
  return `https://player.twitch.tv/?channel=${props.channel}&parent=${twitchParent}`
})
</script>

<template>
  <div :style="size" class="stream">
    <iframe
      :src="embedURL"
      class="embed"
      muted
      allowfullscreen>
    </iframe>
  </div>
</template>

<style scoped>
.stream {
  position: relative;
}

.embed {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
