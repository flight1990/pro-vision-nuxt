<script setup lang="ts">
import {VFileUpload} from "vuetify/labs/components";
</script>

<template>
  <v-file-upload density="comfortable" multiple/>
  <v-progress-linear class="my-4" indeterminate striped height="2"/>
</template>