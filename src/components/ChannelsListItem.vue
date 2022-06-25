<script setup>
defineProps({
  index: { type: Number, required: true }
})
</script>

<template>
  <li class="channels-list-item">
    <span class="channels-list-item__text">
      <slot></slot>
    </span>
    <span
      @click="$emit('delete-channel', index)"
      class="channels-list-item__button">
      x
    </span>
  </li>
</template>

<style scoped>
.channels-list-item {
  display: inline-block;
  margin: 5px;
  padding: 0.25em 0.5em;

  font-weight: 500;

  background-color: var(--color-grey);
  border-radius: 4px;
}

.channels-list-item__text {
  user-select: none;
}

.channels-list-item__button {
  padding-left: 0.2em;

  font-size: 1.2em;
  font-weight: 500;

  color: var(--color-secondary);
  border-style: none;
}

.channels-list-item__button:hover {
  color: var(--color-primary);
  cursor: pointer;
}
</style>
