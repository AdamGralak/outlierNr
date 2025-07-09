<template>
  <Tile title="Wprowadź dane">
    <template #default>
      <form @submit.prevent="onSubmit" class="form">
        <NumberListInput v-model="inputValue" />
      </form>
    </template>

    <template #actions>
      <RouteButton
        type="submit"
        :to="linkTarget"
        :disabled="numberCount < 3"
      >
        Wyszukaj
      </RouteButton>
    </template>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import NumberListInput from '@/components/NumberListInput.vue'
import RouteButton from '@/components/RouteToButton.vue'
import { analyzeParityPattern } from '@/utils/FiltrNumbers.js'

export default {
  name: 'Home',
  components: {
    Tile,
    NumberListInput,
    RouteButton
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    numberList() {
      return this.inputValue
        .split(',')
        .map(n => n.trim())
        .filter(n => n !== '' && !isNaN(n))
    },
    numberCount() {
      return this.numberList.length
    },
    linkTarget() {
      if (this.numberCount < 3) return ''
      const result = analyzeParityPattern(this.inputValue)
      const outlier = result?.[0]
      return outlier !== undefined ? `/wynik/${outlier}` : '/wynik'
    }
  },
  methods: {
    onSubmit() {
      if (this.numberCount < 3) return
      this.$router.push(this.linkTarget)
    }
  },
  watch: {
    inputValue(val) {
      const cleaned = val
        .split(',')
        .map(n => n.trim())
        .filter(n => n !== '' && !isNaN(n))
        .join(', ')
      if (cleaned !== val) this.inputValue = cleaned
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

.route-button:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
