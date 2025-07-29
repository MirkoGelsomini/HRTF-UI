<script setup>
import DataTable from '@/components/DataTable.vue';
import SampleCard from '@/components/SampleCard.vue';
</script>

<template>
  <v-row>
    <v-col>
      <v-card class="h-100 elevation-0">
        <v-card-text>
          <h1>Home</h1>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card class="h-100 elevation-0">
        <v-card-text>
          <h1>Info</h1>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <SampleCard />
    </v-col>
  </v-row>
  <div class="content-title mt-5 mb-3">
    Data
  </div>
  <v-row>
    <v-col>
      <DataTable />
    </v-col>
  </v-row>
</template>
