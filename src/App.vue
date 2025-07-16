<template>
  <div id="app">
    <div class="language-dropdown-global">
      <select v-model="locale" @change="changeLanguage" class="language-select">
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>
    </div>
    <router-view />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n()
    const saved = localStorage.getItem('locale') || 'pl'
    locale.value = saved

    const changeLanguage = () => {
      localStorage.setItem('locale', locale.value)
    }

    return { locale, changeLanguage }
  }
}
</script>

<style scoped>
.language-dropdown-global {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 999;
}

.language-select {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-weight: 500;
}
</style>
