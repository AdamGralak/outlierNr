<template>
  <div class="number-list-input">
    <label v-if="label">{{ label }}</label>
    <input
      :value="internalValue"
      @input="onInput"
      type="text"
      :placeholder="placeholder"
      class="input"
    />
  </div>
</template>

<script>
export default {
  name: 'NumberListInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: String,
    placeholder: {
      type: String,
      default: 'Np. 12, 45, 7'
    }
  },
  emits: ['update:modelValue'],
  computed: {
    internalValue() {
      return this.modelValue
    }
  },
  methods: {
    onInput(event) {
      const raw = event.target.value
      const cleaned = raw.replace(/[^\d,\s]/g, '') // zostawia tylko cyfry, przecinki, spacje
      this.$emit('update:modelValue', cleaned)

      // aktualizacja wartości w polu, jeśli coś zostało wyczyszczone
      if (cleaned !== raw) {
        event.target.value = cleaned
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
