<template>
    <div>
        <NuxtLayout name="page" title="Programme">
            <div class="container">
                <div class="flex">
                    <div class="hidden md:w-2/12 pr-2">
                        <span class="block font-bold md:text-left md:pl-7 text-lg">Time</span>
                    </div>

                    <div class="hidden md:w-10/12 pl-2">
                        <span class="font-bold text-lg">Program</span>
                    </div>

                    <div class="w-full md:hidden">
                        <span class="font-bold text-lg">Time / Program</span>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div 
                        :key="`program_${pi}`" v-for="(p, pi) in data.body" class="flex flex-col md:flex-row" 
                        :class="{ 'border-t': pi > 0 }">
                        <div class="w-full <md:border-l md:w-2/12 <md:pl-5 md:pr-5 bg-gradient-to-b from-white via-white to-transparent <md:py-2 md:py-4 <md:sticky <md:top-0">
                            <span class="block text-2xl md:text-2xl md:text-right font-semibold text-secondary-700">{{ p.time }}</span>
                        </div>
                        <div class="w-full md:w-10/12 pb-4 md:pl-2 md:py-4 flex flex-col space-y-4 border-l">
                            <div v-for="program in p.programs">
                                <div class="flex items-center -ml-1.5 md:-ml-3.5">
                                    <div class="h-3 w-3 bg-gray-400 rounded-full mr-4"></div>
                                    <span class="text-xl font-semibold">{{ program.name }}</span>
                                </div>

                                <div v-if="program.speaker" class="flex flex-col pl-5 md:pl-3.5">
                                    <p>{{ program.speaker.name }}</p>
                                    <p v-for="pos in program.speaker.positions" class="text-gray-700">{{ pos }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
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

interface ScheduleList extends ParsedContent {
    body: Schedule[]
}

interface Schedule {
    time: string
    programs: Program[]
}

interface Program {
    name: string
    speaker?: ProgramSpeaker
}

interface ProgramSpeaker {
    name: string
    positions: string[]
}

const { data } = await useAsyncData(
    'programme', 
    () => queryContent<ScheduleList>('/programme').findOne()
);
</script>
