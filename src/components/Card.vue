<template>
  <div class="card">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 30px 20px;
  max-width: 50vw;
  max-height: 50vh;

  background-color: var(--color-light);
  border-radius: 4px;
}
</style>
