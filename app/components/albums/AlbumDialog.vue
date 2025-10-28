<script setup lang="ts">
import {VFileUpload} from 'vuetify/labs/VFileUpload'

const dialog = defineModel({required: true, default: false})

</script>

<template>
  <v-dialog v-model="dialog" scrollable max-width="750">
    <v-card>
      <v-card-title class="text-h5 font-weight-bold text-uppercase">Album title</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col md="3" cols="12">
            <div class="position-sticky top-0 left-0 ">
              <v-tabs direction="vertical">
                <v-tab>Upload files</v-tab>
                <v-tab>Settings</v-tab>
              </v-tabs>

              <div class="mt-6 text-caption">
                <h4>Gallery status</h4>
                <p class="text-grey">Not published</p>
              </div>
            </div>
          </v-col>
          <v-col md="9" cols="12">
            <v-card-item class="px-0">
              <v-file-upload multiple/>
            </v-card-item>

            <v-card-item class="px-0">
              <v-row>
                <v-col cols="6" md="3" v-for="i in 10" :key="i">
                  <v-img
                      rounded="lg"
                      cover
                      color="grey-lighten-3"
                      aspect-ratio="1"
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  />
                </v-col>
              </v-row>
            </v-card-item>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex flex-column">
        <div class="w-100 px-4">
          <v-progress-linear indeterminate striped height="2"/>
          <p class="text-grey-darken-2 text-caption">Loading photos...</p>
        </div>

        <div class="w-100 d-flex justify-end">
          <v-btn @click="dialog = false">Close</v-btn>
          <v-btn @click="dialog = false">Save</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>