<script setup lang="ts">
import AlbumsList from "~/components/albums/AlbumsList.vue";
import AlbumDialog from "~/components/albums/AlbumDialog.vue";
import {shallowRef} from "vue";

const dialog = shallowRef<boolean>(false)

</script>

<template>
  <AlbumDialog v-model="dialog"/>
  <AlbumsList
      @create="dialog = true"
      @edit="dialog = true"
  />
</template>
