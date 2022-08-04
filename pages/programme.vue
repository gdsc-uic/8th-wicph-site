<template>
    <div>
        <NuxtLayout name="page" title="Programme">
            <div class="container py-8">
                <table class="w-full border">
                    <thead class="border-b">
                        <tr class="flex">
                            <th class="w-1/5 p-2 border-r">Time</th>
                            <th class="w-2/5 p-2 border-r">Program</th>
                            <th class="w-2/5 p-2">Speakers</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <template :key="`program_${pi}`" v-for="(p, pi) in data.body">
                            <tr class="flex" :class="{ 'border-b': !p.sections || p.sections.length == 0 }">
                                <td class="w-1/5 p-2 text-center border-r">{{ p.time }}</td>
                                <td class="w-2/5 p-2 border-r">{{ p.program }}</td>
                                <td class="w-2/5 p-2">{{ p.speakers?.join(', ') ?? '' }}</td>
                            </tr>
        
                            <template v-if="p.sections">
                                <tr class="flex" :class="{ 'border-b': spi == p.sections.length - 1 }" :key="`section_${spi}`" v-for="(sp, spi) in p.sections">
                                    <td class="w-1/5 p-2 text-center border-r"></td>
                                    <td class="w-2/5 p-2 border-r">{{ sp.time }} {{ sp.program }}</td>
                                    <td class="w-2/5 p-2">{{ sp.speakers?.join(', ') ?? '' }}</td>
                                </tr>
                            </template>
                        </template>
                    </tbody>
                </table>
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
