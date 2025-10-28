<script setup lang="ts">

const emits = defineEmits<{
  (e: 'edit'): void
}>()

</script>

<template>
  <v-card class="d-flex align-center">
    <template #prepend>
      <div>
        <v-img
            width="70"
            rounded="lg"
            cover
            color="grey-lighten-3"
            aspect-ratio="1"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        />
      </div>
    </template>

    <div>
      <v-card-title class="px-0 px-md-4 text-subtitle-1">Title</v-card-title>
      <v-card-subtitle class="px-0 px-md-4">Subtitle</v-card-subtitle>
    </div>

    <v-card-text class="d-flex flex-column flex-md-row align-center ga-4">
      <div>
        <p class="text-caption text-grey-darken-2">Unlimited</p>
      </div>

      <div class="d-flex align-center">
        <v-icon size="small" color="grey" class="mx-1">mdi-eye</v-icon>
        <v-icon size="small" color="grey" class="mx-1">mdi-download</v-icon>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn size="x-small" icon="mdi-pencil" @click="emits('edit')"/>
      <v-btn size="x-small" icon="mdi-trash-can-outline"/>
    </v-card-actions>
  </v-card>
</template>