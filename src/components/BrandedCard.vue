<script setup>
defineProps({ showDescription: Boolean })
</script>

<template>
  <div class="branded-card">
    <div class="branded-card__logo">
      MultiTwitch
    </div>
    <p v-if="showDescription" class="branded-card__description">
        Watch any number of <a href="https://twitch.tv" target="_blank">Twitch.tv</a>
        streams at the same time, on the same page <span>:)</span>
    </p>
    <div class="branded-card__divider"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.branded-card {
  padding: 30px 20px;
  background-color: var(--color-light);
  border-radius: 4px;
}

.branded-card__logo {
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-primary);
  user-select: none;
}

.branded-card__description {
  font-size: 0.8em;
  font-weight: 500;
}

.branded-card__description a {
  text-decoration: none;
  color: var(--color-secondary);
}

.branded-card__description span {
  color: var(--color-secondary);
}

.branded-card__divider {
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1)
}
</style>
