<script setup lang="ts">
import {
  bovespaData,
  cac40Data,
  csi300Data,
  daxData,
  ftse100Data,
  nasdaqData,
  nifty50Data,
  nikkei225Data,
} from '@/data-mock/stocks/nationalIndexes'
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
      <Tabs default-value="nasdaq">
        <TabsList class="gap-1 dark:bg-background">
          <TabsTrigger value="nasdaq"> 🇺🇸 NASDAQ </TabsTrigger>
          <TabsTrigger value="cac40"> 🇫🇷 CAC 40 </TabsTrigger>
          <TabsTrigger value="dax"> 🇩🇪 DAX </TabsTrigger>
          <TabsTrigger value="ftse100"> 🇬🇧 FTSE 100 </TabsTrigger>
          <TabsTrigger value="nifty50"> 🇮🇳 NIFTY 50 </TabsTrigger>
          <TabsTrigger value="bovespa"> 🇧🇷 BOVESPA </TabsTrigger>
          <TabsTrigger value="csi300"> 🇨🇳 CSI 300 </TabsTrigger>
          <TabsTrigger value="nikkei225"> 🇯🇵 NIKKEI 225 </TabsTrigger>
        </TabsList>
        <TabsContent value="nasdaq">
          <StocksTable
            :stocks="nasdaqData"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="cac40">
          <StocksTable
            :stocks="cac40Data"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="dax">
          <StocksTable
            :stocks="daxData"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="ftse100">
          <StocksTable
            :stocks="ftse100Data"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="nifty50">
          <StocksTable
            :stocks="nifty50Data"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="bovespa">
          <StocksTable
            :stocks="bovespaData"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="csi300">
          <StocksTable
            :stocks="csi300Data"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
        <TabsContent value="nikkei225">
          <StocksTable
            :stocks="nikkei225Data"
            :isExpanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
          />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>
