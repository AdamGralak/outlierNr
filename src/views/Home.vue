<template>
  <Tile :title="$t('submit')">
    <template #default>
      <form @submit.prevent="onSubmit" class="form">
        <NumberListInput v-model="inputValue" />
        <p v-if="errorMessage" class="error-msg">
          {{ $t(`errors.${errorMessage}`) }}
        </p>
      </form>
    </template>

    <template #actions>
      <button class="route-button" @click="onSubmit">
        {{ $t('submit') }}
      </button>
    </template>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import NumberListInput from '@/components/NumberListInput.vue'
import { analyzeParityPattern } from '@/utils/FiltrNumbers.js'
import { useOutlierStore } from '@/stores/outlierStore'

export default {
  name: 'Home',
  components: {
    Tile,
    NumberListInput
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    errorMessage() {
      return useOutlierStore().error
    }
  },
  methods: {
    onSubmit() {
      const store = useOutlierStore()
      store.analyze(this.inputValue, analyzeParityPattern)

      if (!store.error) {
        this.$router.push('/wynik')
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.route-button {
  background-color: #319795;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.route-button:hover {
  background-color: #2c7a7b;
}

.error-msg {
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>
