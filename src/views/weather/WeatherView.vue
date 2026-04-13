<script setup lang="ts">
import WeatherSearchBar from './partials/WeatherSearchBar.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import H1 from '@/components/typography/H1.vue'
import LinkInternal from '@/components/hover/LinkInternal.vue'
import FranceOutlineCities from '@/assets/misc/FranceOutlineCities.vue'
</script>

<template>
  <H1 title="Weather App" class="mb-4" />

  <WeatherSearchBar class="ml-16 w-1/4 min-w-xs mb-20" />

  <div class="flex items-center justify-around px-16">
    <Card class="min-w-sm flex-1">
      <CardHeader>
        <CardTitle class="text-2xl">National weather</CardTitle>
        <CardDescription>France's 5 largest cities</CardDescription>
      </CardHeader>
      <hr />
      <CardContent class="space-y-2">
        <LinkInternal href="/weather/75056">
          <div class="flex gap-2">
            <span>Paris :</span>
            <span> aaa °C</span>
          </div>
        </LinkInternal>
        <LinkInternal href="/weather/75056">
          <div class="flex gap-2">
            <span>Marseille :</span>
            <span> aaa °C</span>
          </div>
        </LinkInternal>
        <LinkInternal href="/weather/75056">
          <div class="flex gap-2">
            <span>Lyon :</span>
            <span> aaa °C</span>
          </div>
        </LinkInternal>
        <LinkInternal href="/weather/75056">
          <div class="flex gap-2">
            <span>Toulouse :</span>
            <span> aaa °C</span>
          </div>
        </LinkInternal>
        <LinkInternal href="/weather/75056">
          <div class="flex gap-2">
            <span>Nice :</span>
            <span> aaa °C</span>
          </div>
        </LinkInternal>
      </CardContent>
    </Card>
    <div class="flex-1">
      <div class="max-h-96 w-96 mx-auto">
        <FranceOutlineCities />
      </div>
    </div>
  </div>
</template>
