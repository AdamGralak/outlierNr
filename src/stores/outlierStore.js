import { defineStore } from 'pinia'

export const useOutlierStore = defineStore('outlier', {
  state: () => ({
    outlier: null,
    error: null
  }),
  actions: {
    analyze(input, analyzer) {
      const numbers = input
        .split(',')
        .map(n => n.trim())
        .filter(n => /^-?\d+$/.test(n))
        .map(n => parseInt(n, 10))

      if (numbers.length < 3) {
        this.error = 'notEnough'
        this.outlier = null
        return
      }

      const result = analyzer(numbers)

      if (result && result.length === 1) {
        this.outlier = result[0]
        this.error = null
      } else {
        this.outlier = null
        this.error = 'noOutlier'
      }
    }
  }
})