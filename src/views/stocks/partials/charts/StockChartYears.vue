<script setup lang="ts">
import type { ChartConfig } from '@/components/ui/chart'
import { CurveType } from '@unovis/ts'
import { VisAxis, VisLine, VisXYContainer } from '@unovis/vue'
import {
  ChartContainer,
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from '@/components/ui/chart'

type Data = {
  date: Date
  price: number
}

const chartData: Data[] = []

const start = new Date()
start.setDate(start.getDate() - 1095)

let price = 190

for (let i = 0; i < 156; i++) {
  const date = new Date(start)
  date.setDate(start.getDate() + i * 7)

  const change = (Math.random() - 0.5) * 6
  price = Math.max(0, price + change)

  chartData.push({
    date,
    price: Number(price.toFixed(2)),
  })
}

const chartConfig = {
  price: {
    label: 'AAPL',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

const tickValues = chartData.filter((_, i) => i % 20 === 0).map(d => d.date)

const prices = chartData.map((d) => d.price)

const min = Math.min(...prices)
const max = Math.max(...prices)

const padding = (max - min) * 0.8
</script>

<template>
  <ChartContainer :config="chartConfig">
    <VisXYContainer :data="chartData" :y-domain="[min - padding, max + padding]">
      <VisLine
        :x="(d: Data) => d.date"
        :y="(d: Data) => d.price"
        :color="chartConfig.price.color"
        :curve-type="CurveType.Linear"
      />
      <VisAxis
        type="x"
        :x="(d: Data) => d.date"
        :tick-line="false"
        :domain-line="false"
        :grid-line="false"
        :tick-format="
          (d: number) => {
            const date = new Date(d)
            return date.toLocaleDateString('en-US', {
              month: 'short',
              year: '2-digit',
            })
          }
        "
        :tick-values="tickValues"
      />
      <VisAxis
        type="y"
        :num-ticks="4"
        :tick-line="false"
        :domain-line="false"
        :tick-format="(v: number) => `$${v.toFixed(0)}`"
      />
      <ChartTooltip />
      <ChartCrosshair
        :template="componentToString(chartConfig, ChartTooltipContent, { hideLabel: true })"
        :color="chartConfig.price.color"
      />
    </VisXYContainer>
  </ChartContainer>
</template>
