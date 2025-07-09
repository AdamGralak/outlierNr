<template>
  <Tile title="Wynik">
    <p v-if="outlier !== null">
      Liczba odstająca: <strong>{{ outlier }}</strong>
    </p>
    <p v-else>
      Nie znaleziono jednoznacznie odstającej liczby.
    </p>

    <template #actions>
      <RouteButton to="/">
        Powrót
      </RouteButton>
    </template>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import RouteButton from '@/components/RouteToButton.vue'

export default {
  name: 'Wynik',
  components: {
    Tile,
    RouteButton
  },
  computed: {
    outlier() {
      const val = this.$route.params.outlier
      return val !== undefined && val !== '' ? Number(val) : null
    }
  }
}
</script>
