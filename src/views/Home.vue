<script setup>
import { useRouter } from 'vue-router'

import Card from '../components/Card.vue'
import ChannelsForm from '../components/ChannelsForm.vue'
import Logo from '../components/Logo.vue'
import Separator from '../components/Divider.vue'

const router = useRouter()

function onChannelsSubmit(channels) {
  router.push({ path: '/watch', query: channels })
}

</script>

<template>
  <div class="container">
    <Card>
      <div>
        <Logo />
        <p>Watch several streams at the same time, on the same page :)</p>
      </div>

      <Separator class="divider"/>

      <ChannelsForm @submit="onChannelsSubmit" />
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #0e0e10dd;
}

p {
  font-weight: 400;
}

.divider {
  margin-bottom: 16px;
}
</style>
