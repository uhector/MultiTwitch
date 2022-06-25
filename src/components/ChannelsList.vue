<script setup>
import ChannelsListItem from './ChannelsListItem.vue'

defineProps({
  channels: { type: Array, required: true }
})
</script>

<template>
  <ul class="channels-list">
    <ChannelsListItem
      v-for="channel, index in channels"
      :key="index"
      @delete-channel="$emit('delete-channel', $event)"
      :index="index"
    >
      {{ channel }}
    </ChannelsListItem>
  </ul>
</template>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.channels-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
