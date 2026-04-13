<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


import type { ChartConfig } from '@/components/ui/chart';
import { CurveType } from '@unovis/ts';

import { VisArea, VisAxis, VisLine, VisXYContainer } from '@unovis/vue';

import {
    ChartContainer,
    ChartCrosshair,
    ChartTooltip,
    ChartTooltipContent,
    componentToString,
} from '@/components/ui/chart';
import { computed } from 'vue';
import SunFull from '@/components/icons/weather/SunFull.vue';



const chartData = [
  // Jour 1
  { date: new Date("2026-04-01T00:00:00").getTime(), temperature: 12 },
  { date: new Date("2026-04-01T06:00:00").getTime(), temperature: 11 },
  { date: new Date("2026-04-01T12:00:00").getTime(), temperature: 17 },
  { date: new Date("2026-04-01T18:00:00").getTime(), temperature: 15 },

  // Jour 2
  { date: new Date("2026-04-02T00:00:00").getTime(), temperature: 13 },
  { date: new Date("2026-04-02T06:00:00").getTime(), temperature: 12 },
  { date: new Date("2026-04-02T12:00:00").getTime(), temperature: 18 },
  { date: new Date("2026-04-02T18:00:00").getTime(), temperature: 16 },

  // Jour 3
  { date: new Date("2026-04-03T00:00:00").getTime(), temperature: 14 },
  { date: new Date("2026-04-03T06:00:00").getTime(), temperature: 13 },
  { date: new Date("2026-04-03T12:00:00").getTime(), temperature: 19 },
  { date: new Date("2026-04-03T18:00:00").getTime(), temperature: 17 },

  // Jour 4
  { date: new Date("2026-04-04T00:00:00").getTime(), temperature: 13 },
  { date: new Date("2026-04-04T06:00:00").getTime(), temperature: 12 },
  { date: new Date("2026-04-04T12:00:00").getTime(), temperature: 20 },
  { date: new Date("2026-04-04T18:00:00").getTime(), temperature: 18 },

  // Jour 5
  { date: new Date("2026-04-05T00:00:00").getTime(), temperature: 15 },
  { date: new Date("2026-04-05T06:00:00").getTime(), temperature: 14 },
  { date: new Date("2026-04-05T12:00:00").getTime(), temperature: 21 },
  { date: new Date("2026-04-05T18:00:00").getTime(), temperature: 19 },

  // Jour 6
  { date: new Date("2026-04-06T00:00:00").getTime(), temperature: 16 },
  { date: new Date("2026-04-06T06:00:00").getTime(), temperature: 15 },
  { date: new Date("2026-04-06T12:00:00").getTime(), temperature: 22 },
  { date: new Date("2026-04-06T18:00:00").getTime(), temperature: 20 },

  // Jour 7
  { date: new Date("2026-04-07T00:00:00").getTime(), temperature: 14 },
  { date: new Date("2026-04-07T06:00:00").getTime(), temperature: 13 },
  { date: new Date("2026-04-07T12:00:00").getTime(), temperature: 19 },
  { date: new Date("2026-04-07T18:00:00").getTime(), temperature: 17 },
];
const dailyData = [
    { date: new Date('2024-06-01'), weatherCode: 0, max: 25, min: 7 },
    { date: new Date('2024-06-02'), weatherCode: 1, max: 22, min: 6 },
    { date: new Date('2024-06-03'), weatherCode: 2, max: 20, min: 5 },
    { date: new Date('2024-06-04'), weatherCode: 3, max: 18, min: 4 },
    { date: new Date('2024-06-05'), weatherCode: 0, max: 24, min: 8 },
    { date: new Date('2024-06-06'), weatherCode: 1, max: 23, min: 7 },
    { date: new Date('2024-06-07'), weatherCode: 2, max: 21, min: 6 },
]

const chartConfig = {
    temperature: {
        label: 'Temperature',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig;



const svgDefs = `
  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
    <stop
      offset="0%"
      stop-color="${chartConfig.temperature.color}"
      stop-opacity="0.4"
    />
    <stop
      offset="100%"
      stop-color="${chartConfig.temperature.color}"
      stop-opacity="0"
    />
  </linearGradient>
`;
</script>

<template>
    <Card class="pb-16">
        <CardHeader>
            <CardTitle class="text-2xl">7-Days Forecast</CardTitle>
        </CardHeader>

        <hr />
        <CardContent class="m-auto">
            <div class="space-y-8">
                <div class="flex justify-between">
                    <div class="flex">
                        <div>
                            <SunFull class="size-16" />
                        </div>
                        <div>
                            <span class="ml-2 text-4xl">
                                17
                            </span>
                            <span class="relative -top-4 text-sm">°C</span>
                        </div>
                        <div class="ml-3 flex flex-col border-l pl-4 text-xs text-muted-foreground">
                            <span>
                                Precipitation :
                                00 mm
                            </span>
                            <span>
                                Humidity :
                                37%
                            </span>
                            <span>
                                Wind :
                                15 km/h
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mx-auto h-56 w-full max-w-xl px-4">
                    <ChartContainer :config="chartConfig" class="px-4">
                        <VisXYContainer
                            :data="chartData"
                            :svg-defs="svgDefs"
                            :y-domain="[
                                Math.min(...chartData.map((d) => d.temperature)) - 2,
                                Math.max(...chartData.map((d) => d.temperature)) + 2,
                            ]"
                        >
                            <VisArea
                                :x="(d) => d.date"
                                :y="(d) => d.temperature"
                                color="url(#tempGradient)"
                                :opacity="0.6"
                            />
                            <VisLine
                                :x="(d) => d.date"
                                :y="(d) => d.temperature"
                                :color="chartConfig.temperature.color"
                                :curve-type="CurveType.Natural"
                            />
                            <VisAxis
                                type="x"
                                :x="(d) => d.date"
                                :tick-line="false"
                                :domain-line="false"
                                :grid-line="true"
                                :tick-format="
                                    (d: number) => {
                                        const date = new Date(d);
                                        return date.toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            day: 'numeric',
                                        });
                                    }
                                "
                            />
                            <VisAxis
                                type="y"
                                :num-ticks="5"
                                :tick-line="false"
                                :domain-line="false"
                                :tick-format="(v) => `${v}°C`"
                            />
                            <ChartTooltip />
                            <ChartCrosshair
                                :template="
                                    componentToString(chartConfig, ChartTooltipContent, {
                                        hideLabel: false,
                                        labelFormatter(d) {
                                            const date = new Date(d);
                                            return `${date.getHours().toString().padStart(2, '0')}h`;
                                        },
                                    })
                                "
                                :color="chartConfig.temperature.color"
                            />
                        </VisXYContainer>
                    </ChartContainer>
                </div>


                <div class="mx-4 flex items-center justify-center gap-2">
                    <div
                        v-for="day in dailyData"
                        :key="day.date.toISOString()"
                        class="flex flex-col items-center gap-2 rounded-2xl border bg-input/30 p-4 transition-all dark:hover:bg-input/40"
                    >
                        <span>
                            {{
                                day.date.toLocaleDateString('en-US', {
                                    weekday: 'short',
                                })
                            }}.
                        </span>
                        <div class="size-10">
                            <SunFull />
                        </div>
                        <div class="mt-2 flex gap-2 text-xs">
                            <span>{{ day.max }}°</span>
                            <span class="text-muted-foreground">{{ day.min }}°</span>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>
