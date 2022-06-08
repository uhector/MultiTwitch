<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import 'normalize.css';

:root {
  --color-primary: #772CE8;
  --color-secondary: #9146FF;
  --color-light: #ffffff;
  --color-grey: #f1f1f1;
  --color-dark: #262626;
  
  --color-text-light: #ffffff;
  --color-text-dark: #0e0e10;
}

body {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: var(--text-color);
}
</style>
