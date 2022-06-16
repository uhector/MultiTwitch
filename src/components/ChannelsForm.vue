<script setup>
import { ref } from 'vue'
import ChannelsList from './ChannelsList.vue'

const props = defineProps({
  initialChannels: { typle: Array, default: [] }
})

const channels = ref([ ...props.initialChannels ])
const channelInput = ref("")

/* It handles the form group submit event */
function handleSubmit() {
  if (channelInput.value) {
    channels.value.push(channelInput.value)
    channelInput.value = ""
  }
}
</script>

<template>
  <form class="form">
    <div class="form-group">
      <div class="form-group__input">
        <BaseInput
          v-model="channelInput"
          id="channelInput"
          label="Channel name"
          type="text"
        />
      </div>
      <div class="form-group__button">
        <BaseButton
          @click.prevent="handleSubmit"
          type="submit"
        >
          Add channel
        </BaseButton>
      </div>
    </div>
    <ChannelsList
      @delete-channel="(index) => channels.splice(index, 1)"
      :channels="channels"
      class="channels-list"
    />
    <BaseButton
      @click="$emit('submit', channels)"
      :disabled="channels.length === 0"
      type="button"
      class="form__submit"
    >
      Watch!
    </BaseButton>
  </form>
</template>

<style scoped>
.form-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 20px;
}

.form-group__input {
  width: 70%;
  margin-right: 20px;
}

.form-group__button {
  width: 30%;
}

.channels-list {
  width: 100%;
  margin: 20px 0;
}

.form__submit {
  width: 100%;
}
</style>
