<script setup lang="ts">
import { VDateInput } from 'vuetify/labs/VDateInput'
</script>

<template>
  <v-form>
    <v-date-input density="comfortable" label="Shooting date"/>
    <v-date-input density="comfortable" label="Shelf life"/>

    <v-text-field density="comfortable" label="Title"/>
    <v-textarea density="comfortable" label="Description"/>

    <v-autocomplete density="comfortable" label="Tags"/>

    <v-switch hide-details density="compact" label="Access"/>
  </v-form>
</template>