import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    inputPlaceholder: 'e.g. 12, -45, 7',
    outlierFound: 'Outlier number: {number}',
    noOutlier: 'No clear outlier found.',
    back: 'Back',
    submit: 'Search',
    errors: {
      nonNumeric: 'Only numeric values are allowed.',
      notEnough: 'Please enter at least 3 numbers.',
      noOutlier: 'No outlier found.'
    }
  },
  pl: {
    inputPlaceholder: 'Np. 12, -45, 7',
    outlierFound: 'Liczba odstająca: {number}',
    noOutlier: 'Nie znaleziono jednoznacznie odstającej liczby.',
    back: 'Powrót',
    submit: 'Wyszukaj',
    errors: {
      nonNumeric: 'Wpisano wartości nienumeryczne.',
      notEnough: 'Proszę wprowadzić przynajmniej 3 liczby.',
      noOutlier: 'Brak wartości odstającej.'
    }
  }
}

const userLang = localStorage.getItem('lang') || 'pl'

const i18n = createI18n({
  locale: userLang,
  fallbackLocale: 'pl',
  messages
})

export default i18n
