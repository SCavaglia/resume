<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="text-2xl">Informations</CardTitle>
    </CardHeader>
    <hr />
    <CardContent>
      <div class="flex justify-around gap-8">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <div class="flex gap-2">
              <span class="font-bold">Population :</span>
              <span> 2103778</span>
            </div>
            <div class="flex gap-2">
              <span class="font-bold">Area :</span>
              <span> 10536 ha</span>
            </div>
          </div>
          <div class="flex gap-2">
            <span class="font-bold">INSEE Code :</span>
            <span> 75056</span>
          </div>
          <div class="flex max-w-xs gap-2">
            <span class="font-bold whitespace-nowrap">Postal Code(s) :</span>
            <span>
              75001, 75002, 75003, 75004, 75005, 75006, 75007, 75008, 75009, 75010, 75011, 75012,
              75013, 75014, 75015, 75016, 75017, 75018, 75019, 75020, 75116
            </span>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <div class="font-bold">Coat of Arms :</div>
            <div class="-mt-8 ml-32 h-16 w-16 rounded-md shadow-md">
              <img src="/src/assets/img/coat-of-arms-paris.svg" alt="Coat of Arms of Paris" />
            </div>
          </div>
          <div>
            <div class="font-bold">Picture :</div>
            <div class="-mt-4 ml-18 h-40 w-64 overflow-hidden rounded-2xl shadow-md">
              <img src="/src/assets/img/img-paris.jpg" alt="Picture of Paris" class="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
