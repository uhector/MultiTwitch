<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BrandedCard from '../components/BrandedCard.vue'
import ChannelsForm from '../components/ChannelsForm.vue'
import Modal from '../components/Modal.vue'
import Screen from '../components/Screen.vue'

const route = useRoute()
const router = useRouter()

const showModal = ref(true)

const channels = computed(() => {
    return Object.entries(route.query).map(([key, value]) => value)
})

watch(channels, (value) => {
  if (value.length === 0)
    router.push({ path: '/'})
})

function handleSubmit(channels) {
  router.push({ query: channels })
  showModal.value = false
}
</script>

<template>
  <div class="container">
    <Screen :channels="channels" class="screen" />
    <Modal
      v-if="showModal"
      @close="showModal = false"
      class="modal"
    >
      <BrandedCard class="card">
        <ChannelsForm
          @submit="handleSubmit"
          :initialChannels="channels"
        />
      </BrandedCard>
    </Modal>
    <BaseButton
      @click="showModal = true"
      v-show="!showModal"
      class="options-button"
    >
      Options
    </BaseButton>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.screen {
  width: 100%;
  height: 100%;
}

.card {
  max-width: 350px;
}

.modal {
  background-color: #000000cc;
}

.options-button {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 70px;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  opacity: 0.5;
}

.options-button:hover {
  opacity: 1;
}
</style>
