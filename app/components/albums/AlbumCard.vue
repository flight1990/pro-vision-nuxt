<script setup lang="ts">

</script>

<template>
  <v-card class="d-flex align-center">
    <template #prepend>
      <v-avatar color="grey"></v-avatar>
    </template>

    <v-card-title>Title</v-card-title>
    <v-card-subtitle>Subtitle</v-card-subtitle>

    <v-card-text>
      text
    </v-card-text>

    <v-card-actions>
      <v-btn size="x-small" icon="mdi-pencil"/>
      <v-btn size="x-small" icon="mdi-trash-can-outline"/>
    </v-card-actions>
  </v-card>
</template>