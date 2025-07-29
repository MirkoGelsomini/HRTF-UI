<template>
  <v-card class="elevation-0 d-flex flex-column">
    <v-card-title>Title</v-card-title>
    <v-card-text>
      Description
    </v-card-text>
    <v-card-item>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row class="justify-end">
          <v-col cols="auto">
            <v-btn
              rounded
              color="btn-inactive"
              text="Open"
              variant="outlined"
              class="px-5"
            ></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn
              rounded
              color="primary"
              text="Update"
              variant="flat"
              class="px-5"
            ></v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card-item>
  </v-card>
</template>