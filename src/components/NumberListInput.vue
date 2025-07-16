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

  // Zezwól tylko na cyfry, przecinki i minusy
  raw = raw.replace(/[^\d,\-]/g, '')

  // Nie nadpisuj inputa podczas pisania, tylko gdy coś zostanie zakończone przecinkiem
  this.inputValue = raw
  this.$emit('update:modelValue', raw)

  const store = useOutlierStore()

  if (raw.trim() === '') {
    store.outlier = null
    store.error = 'notEnough'
    return
  }

  // Jeśli kończy się przecinkiem – sformatuj dane
  if (raw.endsWith(',')) {
    let parts = raw.slice(0, -1).split(',').map(p => {
      const match = p.match(/^(-?\d+)$/)
      return match ? match[1] : ''
    }).filter(Boolean)

    // Przepisz tylko poprawne części
    const formatted = parts.join(',') + ','
    setTimeout(() => {
      this.inputValue = formatted
      this.$emit('update:modelValue', formatted)
    }, 0)

    store.analyze(parts.join(','), analyzeParityPattern)
  } else {
    const parsed = raw
      .split(',')
      .map(p => p.trim())
      .filter(p => /^-?\d+$/.test(p))
      .map(Number)

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
