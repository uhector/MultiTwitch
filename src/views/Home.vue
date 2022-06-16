<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router'
import BrandedCard from '../components/BrandedCard.vue'
import ChannelsForm from '../components/ChannelsForm.vue'

const router = useRouter()
const githubURL = inject('githubURL')

function handleSubmit(channels) {
  router.push({ path: '/watch', query: channels })
}
</script>

<template>
  <div class="container">
    <BrandedCard :show-description="true" class="branded-card">
      <ChannelsForm
        @submit="handleSubmit"
        class="channels-form"
      />
    </BrandedCard>
    <!-- Github repository link -->
    <div class="github-link">
      <a :href="githubURL" target="_blank">
        <img src="/GitHub-Mark-Light-32px.png" alt="GitHub link">
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: var(--color-dark);
}

.branded-card {
  max-width: 350px;
}

.github-link {
  position: fixed;
  bottom: 15px;
}
</style>
