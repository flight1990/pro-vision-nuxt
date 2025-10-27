<script setup lang="ts">
import {shallowRef} from "vue";
import {useMenuStore} from "~/stores/menu";
import TheSideBar from "~/components/TheSideBar.vue";
import TheAppBar from "~/components/TheAppBar.vue";

const menuStore = useMenuStore()
const drawer = shallowRef<boolean>(true)

</script>

<template>
  <v-layout>
    <TheSideBar :items="menuStore.items" v-model="drawer"/>
    <TheAppBar v-model="drawer"/>

    <v-main>
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-layout>
</template>
