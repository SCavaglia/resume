<script setup lang="ts">
import H1 from '@/components/typography/H1.vue'
import WeatherSearchBar from '../partials/WeatherSearchBar.vue'
import H2 from '@/components/typography/H2.vue';
</script>

<template>
  <H1 title="Weather App" class="mb-4" />

  <WeatherSearchBar class="ml-16 w-1/4 min-w-xs" />

  <H2 title="Paris" subtitle="Paris" class="mt-0" />
</template>
