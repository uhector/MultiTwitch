<script setup>
defineEmits(['close'])
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
      <button @click="$emit('close')" class="modal__button">X</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.modal-content {
  position: relative;
}

.modal__button {
  position: absolute;
  top: 5px;
  right: 7px;

  padding: 0px;

  font-size: 1.2em;
  font-weight: 700;

  background-color: var(--color-light);
  color: var(--color-secondary);
  border-style: none;

  cursor: pointer;
}

.modal__button:hover {
  color: var(--color-primary);
}
</style>
