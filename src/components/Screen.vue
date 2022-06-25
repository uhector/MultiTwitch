<script setup>
import { onMounted, reactive, ref } from 'vue'
import Stream from './Stream.vue'

const props = defineProps({ channels: Array, default: [] })

const root = ref(null)
const optimalSize = reactive({ width: '', height: '' })

// https://github.com/bhamrick/multitwitch/blob/master/multitwitch/static/js/multitwitch.js#L6
function computeOptimalSize (entries) {
  const containerWitdth = entries[0].contentRect.width
  const containerheight = entries[0].contentRect.height

  if (props.channels.length === 0) {
    return
  }

  let width = 0
  let height = 0
  for (let i = 1; i <= props.channels.length; i++) {
    const rows = Math.ceil(props.channels.length / i)
    let maxWidth = Math.floor(containerWitdth / i)
    let maxHeight = Math.floor(containerheight / rows)

    if ((maxWidth * (9 / 16)) < maxHeight) {
      maxHeight = maxWidth * (9 / 16)
    } else {
      maxWidth = maxHeight * (16 / 9)
    }

    if (maxWidth > width) {
      width = maxWidth
      height = maxHeight
    }
  }

  optimalSize.width = `${width}px`
  optimalSize.height = `${height}px`
}

onMounted(() => {
  const observer = new ResizeObserver(computeOptimalSize)
  observer.observe(root.value)
})
</script>

<template>
  <div ref="root" class="screen">
    <Stream
      v-for="channel of channels"
      :key="channel"
      :channel="channel"
      :size="optimalSize"
    />
  </div>
</template>

<style scoped>
.screen {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  height: 100%;

  background-color: #000;
}
</style>
