<script setup lang="ts">

import type {Menu} from "#types/Menu";

defineProps<{
  items: Menu[]
}>()

const drawer = defineModel({required: true, default: true})

</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-list density="compact" item-props :items="items" nav/>

    <template #append>
      <v-list-item
          class="ma-2"
          link
          nav
          prepend-icon="mdi-cog-outline"
          title="Settings"
      />
    </template>
  </v-navigation-drawer>
</template>
