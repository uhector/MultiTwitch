<script setup>
import { useRouter } from 'vue-router'

import Card from '../components/Card.vue'
import ChannelsForm from '../components/ChannelsForm.vue'
import Divider from '../components/Divider.vue'
import Logo from '../components/Logo.vue'

const router = useRouter()

function handleSubmit(channels) {
  router.push({ path: '/watch', query: channels })
}
</script>

<template>
  <div class="container">
    <!-- Card -->
    <Card class="card">
      <!-- Logo -->
      <Logo />
      <p class="description">
        Watch any number of <a href="https://twitch.tv" target="_blank">Twitch.tv</a>
        streams at the same time, on the same page <span>:)</span>
      </p>
      <!-- Divider -->
      <Divider class="divider"/>
      <!-- ChannelsForm -->
      <ChannelsForm
        @submit="handleSubmit"
        class="channels-form"
      />
    </Card>
    <div class="github-link">
      <a href="https://github.com/ulacioh/multwitch" target="_blank">
        <img src="GitHub-Mark-Light-32px.png" alt="GitHub Mark">
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-dark);
}

.card {
  max-width: 350px;
}

.description {
  font-size: 0.8em;
  font-weight: 500;
}

.description a {
  text-decoration: none;
  color: var(--color-secondary);
}

.description span {
  color: var(--color-secondary);
}

.divider {
  margin-bottom: 20px;
}

.github-link {
  position: fixed;
  bottom: 15px;
}
</style>
