<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  width: 100%;
  padding: 0.5em;

  font-size: 0.8em;
  font-weight: 500;

  color: var(--color-text-light);
  background-color: var(--color-secondary);
  border-radius: 4px;
  border-style: none;

  cursor: pointer;
}

.button:hover {
  background-color: var(--color-primary);
}

.button:active {
  background-color: var(--color-secondary);
}

.button:disabled {
  color: rgba(0 0 0 / 0.1);
  background-color: rgba(0 0 0 / 0.1);

  cursor: not-allowed;
}
</style>
