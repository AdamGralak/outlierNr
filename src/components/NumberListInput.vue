<template>
  <div class="number-list-input">
    <label v-if="label">{{ label }}</label>
    <input
      v-model="inputValue"
      @input="onInput"
      type="text"
      :placeholder="$t('inputPlaceholder')"
      class="input"
    />
  </div>
</template>

<script>
import { useOutlierStore } from '@/stores/outlierStore'
import { analyzeParityPattern } from '@/utils/FiltrNumbers.js'

export default {
  name: 'NumberListInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: String
  },
  emits: ['update:modelValue'],
  data() {
    return {
      inputValue: this.modelValue
    }
  },
  watch: {
    modelValue(val) {
      this.inputValue = val
    }
  },
  methods: {
    onInput() {
      let raw = this.inputValue

      // Usuń litery i niedozwolone znaki
      raw = raw.replace(/[a-zA-Z]+/g, '')

      // Zapisz surowe dane przed ewentualnym formatowaniem
      this.inputValue = raw
      this.$emit('update:modelValue', raw)

      if (raw.trim() === '') {
        const store = useOutlierStore()
        store.outlier = null
        store.error = 'notEnough'
        return
      }

      const store = useOutlierStore()

      if (raw.endsWith(',')) {
        let parts = raw.slice(0, -1).split(',').map(p => p.trim())

        parts = parts.map(p => {
          const match = p.match(/^-?\d+/)
          return match ? match[0] : ''
        }).filter(Boolean)

        // NIE dodawaj spacji po przecinkach
        setTimeout(() => {
          const formatted = parts.join(',') + ','
          this.inputValue = formatted
          this.$emit('update:modelValue', formatted)
        }, 0)

        store.analyze(parts.join(','), analyzeParityPattern)
      } else {
        const parsed = raw
          .split(',')
          .map(n => n.trim())
          .filter(n => /^-?\d+$/.test(n))
          .map(n => parseInt(n, 10))

        if (parsed.length > 0) {
          store.analyze(parsed.join(','), analyzeParityPattern)
        }
      }
    }
  }
}
</script>

<style scoped>
.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
}
</style>
