<script setup lang="ts">
import {type Component, ref} from "vue";
import {tabs} from "~/utils/albums/albumsData";

const currentTab = ref("upload");
const dialog = defineModel({ required: true, default: false });

</script>

<template>
  <v-dialog v-model="dialog" scrollable max-width="750">
    <v-card>
      <v-card-title class="text-h5 font-weight-bold text-uppercase">
        Album title
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col md="3" cols="12">
            <div class="position-sticky top-0 left-0">
              <v-tabs direction="vertical" v-model="currentTab">
                <v-tab v-for="tab in tabs" :key="tab.value"  :value="tab.value">
                  {{ tab.title }}
                </v-tab>
              </v-tabs>

              <div class="mt-6 text-caption">
                <h4>Gallery status</h4>
                <p class="text-grey">Not published</p>
              </div>
            </div>
          </v-col>
          <v-col md="9" cols="12">
            <v-tabs-window v-model="currentTab">
              <v-tabs-window-item
                  class="px-3"
                  v-for="tab in tabs"
                  :key="tab.value"
                  :value="tab.value"
              >
                <component :is="tab.component" />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="dialog = false">Close</v-btn>
        <v-btn @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
