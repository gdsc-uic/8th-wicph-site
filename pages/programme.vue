<template>
    <div>
        <NuxtLayout name="page" title="Programme">
            <div class="container py-4 md:py-8">
                <div class="flex">
                    <div class="w-2/6 md:w-2/12 pr-2">
                        <span class="font-bold text-lg">Time</span>
                    </div>

                    <div class="w-4/6 md:w-10/12 pl-2">
                        <span class="font-bold text-lg">Program</span>
                    </div>
                </div>

                <div class="flex flex-col">
                    <template :key="`program_${pi}`" v-for="(p, pi) in data.body">
                        <div class="flex py-4" :class="{ 'border-t': pi > 0 }">
                            <div class="w-2/6 md:w-2/12 pr-2">
                                <span class="block text-xl md:text-2xl text-left font-semibold text-secondary-400">{{ p.time }}</span>
                            </div>
                            <div class="w-4/6 md:w-10/12 pl-2">
                                <span class="text-xl font-semibold">{{ p.program }}</span>
                                <!-- TODO: Speakers goes here -->
                                <p v-if="p.speakers && p.speakers.length !== 0">{{ p.speakers?.join(', ') ?? '' }}</p>
                            </div>
                        </div>

                        <div :key="`section_${pi}_${spi}`" v-for="(sp, spi) in p.sections" class="flex pb-4">
                            <div class="w-2/6 md:w-2/12 pr-2">
                                <span class="block text-xl text-left text-gray-600">{{ sp.time }}</span>
                            </div>
                            <div class="w-4/6 md:w-10/12 pl-2">
                                <span class="text-lg">{{ sp.program }}</span>
                                <p v-if="sp.speakers && sp.speakers.length !== 0">{{ sp.speakers?.join(', ') ?? '' }}</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types.js';

definePageMeta({
    layout: false
});

interface ProgramInfo {
    time: string
    program: string
    speakers?: string[]
    sections?: ProgramInfo[]
}

interface Programme extends ParsedContent {
    body: ProgramInfo[]
}

const { data } = await useAsyncData(
    'programme', 
    () => queryContent<Programme>('/programme').findOne()
);
</script>
