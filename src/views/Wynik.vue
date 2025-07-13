<template>
  <Tile :title="$t('submit')">
    <p v-if="outlier !== null">
      {{ $t('outlierFound', { number: outlier }) }}
    </p>
    <p v-else>
      {{ $t('noOutlier') }}
    </p>

    <template #actions>
      <RouteButton to="/">
        {{ $t('back') }}
      </RouteButton>
    </template>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import RouteButton from '@/components/RouteToButton.vue'
import { useOutlierStore } from '@/stores/outlierStore'

export default {
  name: 'Wynik',
  components: {
    Tile,
    RouteButton
  },
  computed: {
    outlier() {
      return useOutlierStore().outlier
    }
  }
}
</script>