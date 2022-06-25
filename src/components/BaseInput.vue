<script setup>
defineProps(['id', 'modelValue', 'label', 'type'])
defineEmits(['update:modelValue'])
</script>

<template>
  <label v-if="label" :for="id" class="label">
    {{ label }}
  </label>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id"
    :type="type"
    :value="modelValue"
    class="input"
  />
</template>

<style scoped>
.label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-dark);
}

.input {
  width: 100%;
  padding-left: 0.5em;

  background-color: rgba(0 0 0 / 0.1);
  color: var(--color-text-dark);
  border-color: rgba(0 0 0 / 0);
  border-radius: 4px;
}

.input:hover {
  border-style: solid;
  border-color: rgba(0 0 0 / 0.1);
}

.input:focus {
  outline: none;
  background-color: var(--color-text-light);
  border-style: solid;
  border-color: var(--color-primary);
}
</style>
