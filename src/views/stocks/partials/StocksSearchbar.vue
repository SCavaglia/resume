<script setup lang="ts">
import { computed, ref } from 'vue'
import { Search } from 'lucide-vue-next'
import router from '@/router'

type Stock = {
  name: string
  symbol: string
}

const query = ref('')

const stocks = ref<Stock[]>([
  { name: 'Apple Inc', symbol: 'AAPL' },
  { name: 'Microsoft Corporation', symbol: 'MSFT' },
  { name: 'Google LLC', symbol: 'GOOGL' },
  { name: 'Amazon.com Inc', symbol: 'AMZN' },
  { name: 'Tesla Inc', symbol: 'TSLA' },
])
const filteredStocks = computed(() => {
  const q = query.value.toLowerCase().trim()

  if (q.length < 1) return []

  return stocks.value.filter((s) => s.name.toLowerCase().includes(q))
})

function goToStock() {
  router.push('/stocks/aapl')
}
</script>

<template>
  <div class="relative">
    <div>
      <Search class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        v-model="query"
        placeholder="Search a stock..."
        class="w-full rounded bg-input-2 p-2 pl-9 text-sm placeholder-muted-foreground focus:outline-none"
      />
    </div>

    <div
      v-if="query.length"
      class="absolute z-50 border-t w-full rounded bg-card text-sm shadow-md"
    >
      <div
        v-if="filteredStocks.length === 0"
        class="py-8 text-center text-sm text-muted-foreground"
      >
        No results found.
      </div>

      <div v-else>
        <div
          v-for="stock in filteredStocks"
          :key="stock.symbol"
          :value="stock.name"
          @click="() => goToStock()"
          class="cursor-pointer rounded px-3 py-1 hover:bg-card-hover-2"
        >
          {{ stock.name }}
          ({{ stock.symbol }})
        </div>
      </div>
    </div>
  </div>
</template>
