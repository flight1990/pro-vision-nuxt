<script setup lang="ts">
import BaseForm from "~/components/BaseForm.vue";

definePageMeta({
  layout: 'auth'
})

</script>

<template>
  <BaseForm>
    <v-text-field/>
    <v-text-field/>
    <v-text-field/>
  </BaseForm>
</template>
