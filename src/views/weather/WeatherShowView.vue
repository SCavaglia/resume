<script setup lang="ts">
import H1 from '@/components/typography/H1.vue'
import WeatherSearchBar from './partials/WeatherSearchBar.vue'
import H2 from '@/components/typography/H2.vue'
import MunicipalityCard from './partials/MunicipalityCard.vue'
import WeatherCard from './partials/WeatherCard.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <H1 title="Weather App" class="mb-4" />

  <WeatherSearchBar class="ml-16 w-1/4 min-w-xs" />

  <div class="px-16">
    <H2 title="Paris" subtitle="Paris" class="mt-0" />
    <Tabs default-value="information">
      <TabsList class="bg-transparent">
        <TabsTrigger value="information" class="cursor-pointer px-4 text-xl font-bold">
          Information
        </TabsTrigger>
        <TabsTrigger value="forecast" class="cursor-pointer px-4 text-xl font-bold">
          Forecast
        </TabsTrigger>
      </TabsList>
      <TabsContent value="information">
        <MunicipalityCard />
      </TabsContent>
      <TabsContent value="forecast">
        <WeatherCard />
      </TabsContent>
    </Tabs>
  </div>
</template>
