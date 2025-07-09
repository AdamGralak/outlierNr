# 🔍 Outlier Number Finder (Vue.js)

Aplikacja służy do wykrywania liczby odstającej (np. jednej parzystej wśród nieparzystych) na podstawie listy liczb podanych przez użytkownika.

Zbudowana z użyciem **Vue 3**, **Vite** i **GitHub Pages**.

---

## 🔗 Demo

Zobacz działającą wersję aplikacji tutaj:  
👉 [https://adamgralak.github.io/outlierNr/](https://adamgralak.github.io/outlierNr/)

---

## 🧠 Funkcjonalności

- ✅ Wprowadzanie liczb oddzielonych przecinkami
- 🔍 Wykrywanie liczby odstającej (np. 1 parzysta wśród nieparzystych)
- ✏️ Automatyczne czyszczenie błędnych znaków w polu input
- ⚠️ Przycisk wyszukiwania aktywny tylko przy ≥ 3 poprawnych liczbach
- ⌨️ Obsługa klawisza Enter jako wyszukiwania
- ↩️ Powrót do strony głównej przez dedykowany przycisk

---

## 🎮 Instrukcja obsługi

1. **Na stronie głównej:**
   - Wpisz liczby oddzielone przecinkami, np. `2, 4, 6, 5`
   - Minimalna liczba liczb to **3**
   - Niedozwolone znaki (litery, znaki specjalne) są automatycznie usuwane

2. **Kliknij przycisk `Wyszukaj`** (lub naciśnij `Enter`)
   - Jeśli warunki są spełnione, nastąpi przejście do strony z wynikiem

3. **Na stronie wyniku:**
   - Wyświetli się liczba odstająca (np. `5`)
   - Jeśli nie da się jednoznacznie wskazać liczby odstającej — pojawi się odpowiedni komunikat

4. **Kliknij `Powrót`**, aby wrócić na stronę główną

---

## ⚙️ Stos technologiczny

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [GitHub Pages](https://pages.github.com/)
