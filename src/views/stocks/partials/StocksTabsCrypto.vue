<script setup lang="ts">
import {
  cryptoMajors,
  cryptoLayer1,
  cryptoEcosystem,
  cryptoExchange,
  cryptoMeme,
  cryptoGaming,
  cryptoStable
} from '@/data-mock/stocks/cryptoIndexes'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ref } from 'vue'
import StocksTable from './StocksTable.vue'

const isExpanded = ref(false)
</script>

<template>
  <Card>
    <CardHeader class="-mb-4">
      <CardTitle class="flex items-center gap-4 text-2xl"> Indexes </CardTitle>
    </CardHeader>
    <hr />
    <CardContent class="px-16">
      <Tabs default-value="majors">
        <TabsList class="gap-1 dark:bg-background">
          <TabsTrigger value="majors"> Majors </TabsTrigger>
          <TabsTrigger value="layer1"> Layer 1 </TabsTrigger>
          <TabsTrigger value="ecosystem"> Ecosystem </TabsTrigger>
          <TabsTrigger value="exchange"> Exchange </TabsTrigger>
          <TabsTrigger value="meme"> Memes </TabsTrigger>
          <TabsTrigger value="gaming"> Gaming </TabsTrigger>
          <TabsTrigger value="stable"> Stablecoins </TabsTrigger>
        </TabsList>
        <TabsContent value="majors">
          <StocksTable
            :stocks="cryptoMajors"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="layer1">
          <StocksTable
            :stocks="cryptoLayer1"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="ecosystem">
          <StocksTable
            :stocks="cryptoEcosystem"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="exchange">
          <StocksTable
            :stocks="cryptoExchange"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="meme">
          <StocksTable
            :stocks="cryptoMeme"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="gaming">
          <StocksTable
            :stocks="cryptoGaming"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="stable">
          <StocksTable
            :stocks="cryptoStable"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>

    

      </Tabs>
    </CardContent>
  </Card>
</template>
