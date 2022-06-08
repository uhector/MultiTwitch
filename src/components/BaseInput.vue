<script setup>
defineProps(['id', 'modelValue', 'label', 'type'])

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
      :type="type"
      :value="modelValue"
      class="input"
    />
  </div>
</template>

<style scoped>
.label {
  margin-bottom: 50px;

  font-size: 0.9rem;
  font-weight: 500;

  color: var(--color-text-dark);
}

.input {
  box-sizing: border-box;
  width: 100%;
  padding-left: 0.5em;

  font-size: 1em;

  color: var(--color-text-dark);
  background-color: rgba(0 0 0 / 0.1);
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
