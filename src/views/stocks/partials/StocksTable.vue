<script setup lang="ts">
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import router from '@/router'

const props = defineProps<{
  stocks: {
    symbol: string
    name: string
    price: number
    change: number
    changePercent: number
  }[]
  isExpanded: boolean
}>()

const emit = defineEmits(['toggle'])

// 👉 copie locale (important pour éviter mutation directe)
const localStocks = ref([...props.stocks])

const sortKey = ref<string | null>(null)
const sortDirection = ref<'asc' | 'desc'>('asc')

const sortBy = (key: string) => {
  if (sortKey.value === key) {
    // toggle asc/desc
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDirection.value = 'asc'
  }
}

const sortedStocks = computed(() => {
  if (!sortKey.value) return localStocks.value

  return [...localStocks.value].sort((a, b) => {
    const aValue = a[sortKey.value as keyof typeof a]
    const bValue = b[sortKey.value as keyof typeof b]

    if (aValue < bValue) return sortDirection.value === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
})
</script>

<template>
  <div
    class="overflow-y-auto transition-all duration-300"
    :class="props.isExpanded ? 'max-h-[400px]' : 'max-h-[160px]'"
  >
    <table class="w-full table-fixed border-collapse">
          <colgroup>
    <col class="w-1/7" />
    <col class="w-3/7" />
    <col class="w-1/7" />
    <col class="w-1/7" />
    <col class="w-1/7" />
  </colgroup>
      <thead>
        <tr>
          <th class="border-b-2 px-4 py-2 text-left">Symbol</th>
          <th class="border-b-2 px-4 py-2 text-left">Name</th>
          <th class="border-b-2 px-4 py-2 text-right" @click="sortBy('price')">
            <div
              class="flex cursor-pointer items-center justify-end gap-1 transition-colors hover:text-foreground-hover"
              :class="{
                'text-blue-200': sortKey === 'price',
              }"
            >
              <span>Price</span>
              <ArrowUpDown class="h-4 w-4" />
            </div>
          </th>
          <th class="border-b-2 px-4 py-2 text-right" @click="sortBy('change')">
            <div
              class="flex cursor-pointer items-center justify-end gap-1 transition-colors hover:text-foreground-hover"
              :class="{
                'text-blue-200': sortKey === 'change',
              }"
            >
              <span>Change</span>
              <ArrowUpDown class="h-4 w-4" />
            </div>
          </th>
          <th class="border-b-2 px-4 py-2 text-right" @click="sortBy('changePercent')">
            <div
              class="flex cursor-pointer items-center justify-end gap-1 transition-colors hover:text-foreground-hover"
              :class="{
                'text-blue-200': sortKey === 'changePercent',
              }"
            >
              <span>Change %</span>
              <ArrowUpDown class="h-4 w-4" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="stock in sortedStocks"
          :key="stock.symbol"
          class="cursor-pointer transition-colors hover:bg-background-hover"
          @click="router.push(`/stocks/aapl`)"
        >
          <td class="border-b px-4 py-2">{{ stock.symbol }}</td>
          <td class="border-b px-4 py-2">{{ stock.name }}</td>
          <td class="border-b px-4 py-2 text-right">{{ stock.price }}</td>
          <td
            :class="[
              'border-b px-4 py-2 text-right',
              stock.change >= 0 ? 'text-green-500' : 'text-destructive',
            ]"
          >
            {{ stock.change }}
          </td>
          <td
            :class="[
              'border-b px-4 py-2 text-right',
              stock.changePercent >= 0 ? 'text-green-500' : 'text-destructive',
            ]"
          >
            {{ stock.changePercent }}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button variant="outline" class="my-4 py-2 w-full border rounded-2xl flex justify-center items-center hover:bg-accent transition" @click="emit('toggle')">
    <ChevronDown :class="{ 'rotate-180': props.isExpanded }" class="transition-transform" />
  </button>
</template>
