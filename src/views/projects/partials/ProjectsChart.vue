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




const chartData = [
  { date: new Date('2024-01-01'), aapl: 186, msft: 330, nvda: 120, googl: 90 },
  { date: new Date('2024-02-01'), aapl: 305, msft: 250, nvda: 150, googl: 110 },
  { date: new Date('2024-03-01'), aapl: 237, msft: 180, nvda: 100, googl: 80 },
  { date: new Date('2024-04-01'), aapl: 73, msft: 120, nvda: 80, googl: 60 },
  { date: new Date('2024-05-01'), aapl: 209, msft: 300, nvda: 180, googl: 140 },
  { date: new Date('2024-06-01'), aapl: 214, msft: 280, nvda: 160, googl: 130 },
]

type Data = (typeof chartData)[number]

const chartConfig = {
  aapl: {
    label: 'AAPL',
    color: 'var(--chart-1)',
  },
  msft: {
    label: 'MSFT',
    color: 'var(--chart-2)',
  },
  nvda: {
    label: 'NVDA',
    color: 'var(--chart-3)',
  },
  googl: {
    label: 'GOOGL',
    color: 'var(--chart-4)',
  }

} satisfies ChartConfig

const seriesColors = [
  chartConfig.aapl.color,
  chartConfig.msft.color,
  chartConfig.nvda.color,
  chartConfig.googl.color
]
</script>

<template>
  <ChartContainer :config="chartConfig">
    <VisXYContainer :data="chartData" :margin="{ left: -24 }" :y-domain="[0, undefined]">
      <VisLine
        target="aapl"
        :x="(d: Data) => d.date"
        :y="(d: Data) => d.aapl"
        :color="chartConfig.aapl.color"
        :curve-type="CurveType.Linear"
      />
      <VisLine
        target="msft"
        :x="(d: Data) => d.date"
        :y="(d: Data) => d.msft"
        :color="chartConfig.msft.color"
        :curve-type="CurveType.Linear"
      />
      <VisLine
        target="nvda"
        :x="(d: Data) => d.date"
        :y="(d: Data) => d.nvda"
        :color="chartConfig.nvda.color"
        :curve-type="CurveType.Linear"
      />
      <VisLine
        target="googl"
        :x="(d: Data) => d.date"
        :y="(d: Data) => d.googl"
        :color="chartConfig.googl.color"
        :curve-type="CurveType.Linear"
      />
      <VisAxis
        type="x"
        :x="(d: Data) => d.date"
        :tick-line="false"
        :domain-line="false"
        :grid-line="false"
        :num-ticks="6"
        :tick-format="
          (d: number) => {
            const date = new Date(d)
            return date.toLocaleDateString('en-US', {
              month: 'short',
            })
          }
        "
        :tick-values="chartData.map((d) => d.date)"
      />
      <VisAxis type="y" :num-ticks="3" :tick-line="false" :domain-line="false" />
      <ChartTooltip />
      <ChartCrosshair
        :template="componentToString(chartConfig, ChartTooltipContent, { hideLabel: true })"
        :color="(d, i) => seriesColors[i]"
      />
    </VisXYContainer>
  </ChartContainer>
</template>
