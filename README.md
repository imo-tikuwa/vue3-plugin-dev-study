# @imo-tikuwa/vue3-plugin-dev-study

This is Vue3&Bootstrap5 component library development examples.

## Installation
```
npm install -D @imo-tikuwa/vue3-plugin-dev-study
```

## Usage
1. import plugin.
```diff:main.ts
import { createApp } from 'vue'
import App from './App.vue'

import { BootstrapButtonPlugin } from '@imo-tikuwa/vue3-plugin-dev-study'

createApp(App).use(BootstrapButtonPlugin).mount('#app')
```

2. You can display Bootstrap5 buttons using the following code:
```vue:SomethingPage.vue
<script setup lang="ts">
import { BaseButton } from '@imo-tikuwa/vue3-plugin-dev-study'
</script>

<template>
  <div class="container">
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
  </div>
</template>
```

## BaseButton Properties

| Option    | Required | Values                                     | Description                    |
|-----------|----------|--------------------------------------------|--------------------------------|
| label     |          | string                                     | The text displayed on the button|
| size      | ✓        | 'small' \| 'medium' \| 'large'             | Size of the button             |
| outline   | ✓        | boolean                                    | Specifies if it's an outline button or not |
| color     | ✓        | 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark' \| 'link' | Color variant of the button |
| disabled  | ✓        | boolean                                    | Disables the button            |
