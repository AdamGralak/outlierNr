<template>
  <div class="tile">
    <h2 class="title">{{ title }}</h2>
    <div class="content">
      <slot />
    </div>
    <div class="actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    title: String,
  }
}
</script>

<style scoped>
.tile {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e6fffa;
  border: 1px solid #38b2ac;
  border-radius: 12px;
  padding: 25px;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0 4px 12px rgba(0, 128, 128, 0.15);
  transition: transform 0.2s ease;
  text-align: center;
}

.title {
  color: #234e52;
  font-size: 20px;
  margin-bottom: 32px;
}

.content {
  margin-bottom: 32px;
  width: 100%;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
}
</style>
