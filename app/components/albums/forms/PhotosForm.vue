<script setup lang="ts">

</script>

<template>
  <v-row>
    <v-col cols="6" md="3" v-for="i in 20" :key="i">
      <v-img
          rounded="lg"
          cover
          color="grey-lighten-3"
          aspect-ratio="1"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      >
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <div v-bind="props" class="d-flex fill-height justify-end">
              <v-btn v-if="isHovering" class="ma-1" :ripple="false" variant="text" size="x-small" icon="mdi-close"/>
            </div>
          </template>
        </v-hover>
      </v-img>
    </v-col>
  </v-row>
</template>