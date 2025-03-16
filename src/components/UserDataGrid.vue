<script setup>

import { onMounted } from 'vue';
import { userStoreDefinition } from '@/stores/userStoreDefinition';

const userStore = userStoreDefinition();

onMounted( () => {
  userStore.fetchUsers();
});

const headers = [
  { title: "ID", key: "id" },
  { title: "Name", key: "name" },
  { title: "Email", key: "email" },
  { title: "Role", key: "role" },
];

</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>Users</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="userStore.users" density="compact" />
      </v-card-text>
    </v-card>
  </v-container>
</template>
