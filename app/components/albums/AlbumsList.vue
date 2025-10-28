<script setup lang="ts">
import AlbumCard from "~/components/albums/AlbumCard.vue";

const emits = defineEmits<{
  (e: 'create'): void
  (e: 'edit'): void
}>()

</script>

<template>
  <div class="d-flex flex-column ga-2">
    <div class="d-flex align-center justify-space-between">
      <v-btn @click="emits('create')">Create gallery</v-btn>

      <span>filters</span>
    </div>

    <AlbumCard v-for="i in 10" :key="i" @edit="emits('edit')"/>
  </div>
</template>
