<script setup lang="ts">
import {onMounted, shallowRef} from "vue";
import SsrLoader from "~/components/SsrLoader.vue";

const loading = shallowRef<boolean>(true)

onMounted(() => loading.value = false)
</script>

<template>
  <div>
    <NuxtLayout>
        <NuxtLoadingIndicator/>
        <NuxtRouteAnnouncer/>

        <SsrLoader v-if="loading"/>
        <NuxtPage/>
    </NuxtLayout>
  </div>
</template>