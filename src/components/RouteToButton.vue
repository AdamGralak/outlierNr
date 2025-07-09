<template>
  <button class="route-button" @click="navigate">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'RouteButton',
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  methods: {
    navigate() {
      this.$router.push(this.to)
    }
  }
}
</script>

<style scoped>
.route-button {
  background-color: #319795; /* teal-500 */
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.route-button:hover {
  background-color: #2c7a7b; /* darker teal */
}
</style>
