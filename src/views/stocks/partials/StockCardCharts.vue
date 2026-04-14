<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import StockChartDay from './charts/StockChartDay.vue'
import StockChartWeek from './charts/StockChartWeek.vue'

import { ref, computed } from 'vue'
import StockChartMonth from './charts/StockChartMonth.vue'
import StockChartYear from './charts/StockChartYear.vue'
import StockChartYears from './charts/StockChartYears.vue'

const active = ref<'day' | 'week' | 'month' | 'year' | 'maximum'>('day')

function setActive(chart: typeof active.value) {
  active.value = chart
}

const charts = {
  day: StockChartDay,
  week: StockChartWeek,
  month: StockChartMonth,
  year: StockChartYear,
  maximum: StockChartYears,
}

const sideCharts = computed(() => {
  return (['day', 'week', 'month', 'year', 'maximum'] as const).filter((c) => c !== active.value)
})

const labels: Record<typeof active.value, string> = {
  day: 'Today',
  week: 'Week',
  month: 'Month',
  year: 'Year',
  maximum: 'Max',
}
</script>

<template>
  <Card>
    <CardHeader class="-mb-4">
      <CardTitle class="text-3xl">Charts</CardTitle>
    </CardHeader>
    <hr />
    <CardContent>
      <div class="flex gap-8">
        <div class="w-3/5 my-auto">
          <div class="text-2xl font-bold text-center">{{ labels[active] }}</div>

          <div class="h-100 p-8">
            <component :is="charts[active]" />
          </div>
        </div>

        <div class="flex-1 space-y-2 overflow-y-auto max-h-[500px] p-8">
          <div
            v-for="chart in sideCharts"
            :key="chart"
            class="p-4 rounded-2xl border cursor-pointer transition-transform duration-200 ease-out hover:opacity-80 hover:scale-105 hover:bg-muted"
            @click="setActive(chart)"
          >
            <div class="font-bold">{{ labels[chart] }}</div>

            <div class="h-28 px-8">
              <component :is="charts[chart]" />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
