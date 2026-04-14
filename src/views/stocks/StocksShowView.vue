<script setup lang="ts">
import H1 from '@/components/typography/H1.vue'
import StocksSearchbar from './partials/StocksSearchbar.vue'
import H2 from '@/components/typography/H2.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import StockCardInformation from './partials/StockCardInformation.vue'
import StockCardCharts from './partials/StockCardCharts.vue'
</script>

<template>
  <H1 title="Stocks App" class="mb-4" />

  <StocksSearchbar class="ml-16 w-1/4 min-w-xs" />

  <div class="px-16">
    <H2 title="Apple Inc." subtitle="AAPL" class="mt-0" />
    <Tabs default-value="information">
      <TabsList class="bg-transparent">
        <TabsTrigger value="information" class="cursor-pointer px-4 text-xl font-bold">
          Information
        </TabsTrigger>
        <TabsTrigger value="chart" class="cursor-pointer px-4 text-xl font-bold">
          Chart
        </TabsTrigger>
      </TabsList>
      <TabsContent value="information">
        <StockCardInformation />
      </TabsContent>
      <TabsContent value="chart">
        <StockCardCharts />
      </TabsContent>
    </Tabs>
  </div>
</template>
