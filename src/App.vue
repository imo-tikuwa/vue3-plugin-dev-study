<script setup lang="ts">
import BaseButton from './components/BaseButton.vue'
</script>

<template>
  <div class="container mt-2 text-center">
    <h1>Hello, This is Vue3 & Bootstrap5 Examples.</h1>
    <h2 class="mt-4">Button Colors</h2>
    <div class="row">
      <div class="col-12">
        <BaseButton label="Primary" class="me-2" />
        <BaseButton label="Secondary" :color="'secondary'" class="me-2" />
        <BaseButton label="Success" :color="'success'" class="me-2" />
        <BaseButton label="Danger" :color="'danger'" class="me-2" />
        <BaseButton label="Warning" :color="'warning'" class="me-2" />
        <BaseButton label="Info" :color="'info'" class="me-2" />
        <BaseButton label="Light" :color="'light'" class="me-2" />
        <BaseButton label="Dark" :color="'dark'" class="me-2" />
        <BaseButton label="Link" :color="'link'" />
      </div>
    </div>
    <h2 class="mt-4">Button Colors (outline)</h2>
    <div class="row">
      <div class="col-12">
        <BaseButton label="Primary" :outline="true" class="me-2" />
        <BaseButton label="Secondary" :outline="true" :color="'secondary'" class="me-2" />
        <BaseButton label="Success" :outline="true" :color="'success'" class="me-2" />
        <BaseButton label="Danger" :outline="true" :color="'danger'" class="me-2" />
        <BaseButton label="Warning" :outline="true" :color="'warning'" class="me-2" />
        <BaseButton label="Info" :outline="true" :color="'info'" class="me-2" />
        <BaseButton label="Light" :outline="true" :color="'light'" class="me-2" />
        <BaseButton label="Dark" :outline="true" :color="'dark'" class="me-2" />
        <BaseButton label="Link" :outline="true" :color="'link'" />
      </div>
    </div>
    <h2 class="mt-4">Button Sizes</h2>
    <div class="row">
      <div class="col-12">
        <BaseButton label="Small" :size="'small'" class="me-2" />
        <BaseButton label="Medium" class="me-2" />
        <BaseButton label="Large" :size="'large'" />
      </div>
    </div>
    <h2 class="mt-4">Button Disabled</h2>
    <div class="row">
      <div class="col-12">
        <BaseButton label="Disabled" :disabled="true" />
      </div>
    </div>
    <h2 class="mt-4">Button Slot Label</h2>
    <div class="row">
      <div class="col-12">
        <BaseButton>Text111<br />Text222</BaseButton>
      </div>
    </div>
  </div>
</template>
