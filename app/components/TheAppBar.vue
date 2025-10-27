<script setup lang="ts">

const drawer = defineModel({required: true, default: true})

</script>

<template>
  <v-app-bar border="b" class="ps-4" flat>
    <v-app-bar-nav-icon @click="drawer = !drawer"/>

    <v-app-bar-title>Application</v-app-bar-title>

    <template #append>
      <v-btn class="text-none me-2" height="48" icon slim>
        <v-avatar color="surface-light" image="https://cdn.vuetifyjs.com/images/john.png" size="32"/>

        <v-menu activator="parent">
          <v-list density="compact" nav>
            <v-list-item append-icon="mdi-cog-outline" link title="Settings"/>
            <v-list-item append-icon="mdi-logout" link title="Logout"/>
          </v-list>
        </v-menu>
      </v-btn>
    </template>
  </v-app-bar>
</template>