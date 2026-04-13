<script setup lang="ts">
type Props = {
    title: string;
    subtitle?: string;
};

defineProps<Props>();
</script>
<template>
    <div class="my-16 space-y-2 text-center text-balance">
        <h2 class="text-3xl font-extrabold tracking-tight">
            {{ title }}
        </h2>
        <p v-if="subtitle" class="text-xl text-muted-foreground">
            {{ subtitle }}
        </p>
    </div>
</template>
