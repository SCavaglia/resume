<script setup lang="ts">
import H1 from '@/components/typography/H1.vue'
import StocksSearchbar from './partials/StocksSearchbar.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import StocksTabsNational from './partials/StocksTabsNational.vue'
import StocksTabsCrypto from './partials/StocksTabsCrypto.vue'
</script>

<template>
  <H1 title="Stocks App" class="mb-4" />

  <StocksSearchbar class="ml-16 w-1/4 min-w-xs mb-20" />

  <div class="mx-16">
    <Tabs default-value="national">
      <TabsList class="bg-transparent">
        <TabsTrigger value="national" class="cursor-pointer px-4 text-xl font-bold">
          National Index
        </TabsTrigger>
        <TabsTrigger value="cryptocurrency" class="cursor-pointer px-4 text-xl font-bold">
          Cryptocurrency
        </TabsTrigger>
      </TabsList>
      <TabsContent value="national">
        <StocksTabsNational />
      </TabsContent>
      <TabsContent value="cryptocurrency">
        <StocksTabsCrypto />
      </TabsContent>
    </Tabs>
  </div>
</template>
