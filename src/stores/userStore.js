import { defineStore } from 'pinia';

export const userStore = defineStore("userStore", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      this.users = [
        { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
        { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
        { id: 3, name: "Charlie", email: "charlie@example.com", role: "Editor" },
      ];
    }
  }
});
