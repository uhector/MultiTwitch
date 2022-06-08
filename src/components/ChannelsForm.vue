<script setup>
import { ref } from 'vue'

import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

const props = defineProps({
  initialChannels: {
    typle: Array,
    default: []
  }
})

defineEmits(['submit'])

const channels = ref([...props.initialChannels])
const channelInput = ref("")

function addChannel() {
  if (channelInput.value)
    channels.value.push(channelInput.value)
    channelInput.value = ""
}
</script>

<template>
  <form class="form">
    <div class="form-group">
      <BaseInput
        v-model="channelInput"
        id="channelInput"
        label="Channel name"
        type="text"
        class="form-group__input"
      />
      <BaseButton @click="addChannel">Add channel</BaseButton>
    </div>

    <div class="channels">
      <span v-for="channel, index of channels" class="channels__item">
        <span class="channels__item-text">{{ channel }}</span>
        <span @click="channels.splice(index, 1)" class="channels__item-button">x</span>
      </span>
    </div>
    
    <BaseButton @click="$emit('submit', channels)" :disabled="channels.length === 0" type="button">Watch!</BaseButton>
  </form>
</template>

<style scoped>
.form-group {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}

.form-group__input {
  min-width: 70%;
  margin-right: 10px;
}

.channels {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
}

.channels__item {
  display: inline-block;
  margin: 5px;
  padding: 0.25em 0.5em;

  font-weight: 500;

  background-color: var(--color-grey);
  border-radius: 4px;
}

.channels__item-button {
  padding-left: 0.2em;

  font-size: 1.2em;
  font-weight: 500;
  
  color: var(--color-primary);
  border-style: none;
}

.channels__item-button:hover {
  cursor: pointer;
}
</style>
