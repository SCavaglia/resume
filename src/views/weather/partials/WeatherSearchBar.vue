<script setup lang="ts">
import { computed, ref } from 'vue'
import { Search } from 'lucide-vue-next'
import router from '@/router'

type Municipality = {
  nom: string
  code: string
}

const query = ref('')

const municipalities = ref<Municipality[]>([
  { nom: 'Lyon', code: '69123' },
  { nom: 'Marseille', code: '13055' },
  { nom: 'Nice', code: '06088' },
  { nom: 'Paris', code: '75056' },
  { nom: 'Toulouse', code: '31555' },
])
const filteredMunicipalities = computed(() => {
  const q = query.value.toLowerCase().trim()

  if (q.length < 1) return []

  return municipalities.value.filter((m) => m.nom.toLowerCase().includes(q))
})

function goToMunicipality() {
  router.push('/weather/75056')
}
</script>

<template>
  <div class="relative">
    <div>
      <Search class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        v-model="query"
        placeholder="Search a municipality..."
        class="w-full rounded bg-input-2 p-2 pl-9 text-sm placeholder-muted-foreground focus:outline-none"
      />
    </div>

    <div
      v-if="query.length"
      class="absolute z-50 border-t w-full rounded bg-card text-sm shadow-md"
    >
      <div
        v-if="filteredMunicipalities.length === 0"
        class="py-8 text-center text-sm text-muted-foreground"
      >
        No results found.
      </div>

      <div v-else>
        <div
          v-for="municipality in filteredMunicipalities"
          :key="municipality.code"
          :value="municipality.nom"
          @click="() => goToMunicipality()"
          class="cursor-pointer rounded px-3 py-1 hover:bg-card-hover-2"
        >
          {{ municipality.nom }}
          ({{ municipality.code }})
        </div>
      </div>

      <!-- 
      <div v-if="loading" class="flex items-center gap-2 px-3 py-1.5 text-muted-foreground">
        Loading...
      </div> 
      -->
    </div>
  </div>
</template>
