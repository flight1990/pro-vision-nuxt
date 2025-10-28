<script setup lang="ts">
const dialog = defineModel({required: true, default: false})

</script>

<template>
  <v-dialog v-model="dialog">

  </v-dialog>
</template>