<template>
  <div>
    <NuxtLayout name="page" title="Committees">
      <div class="container flex flex-col py-8 space-y-8">
        <div :key="c.committee" v-for="c in data.body">
            <h2 class="text-2xl font-bold text-secondary-400 border-b pb-3">{{ c.committee }}</h2>

            <template v-for="(label, key) in chairsKV" :key="`${c.committee}_${label}`">
              <template v-if="c[key]">
                <div class="flex flex-col md:flex-row py-4">
                  <div class="w-full md:w-1/4 pt-2">
                    <h3>{{ label }}</h3>
                  </div>

                  <div class="flex-1 flex flex-wrap">
                    <div v-for="(p, pi) in c[key]" :key="`${c.committee}_${label}_${pi}`" class="flex w-full md:w-1/2 md:px-2 py-2">
                      <img v-if="p.image" :src="`/committee_images/${p.image}`" :alt="p.name" class="h-16 w-16 object-cover object-center rounded-full bg-primary-400" />
                      <div v-else class="h-16 w-16 bg-gray-200 rounded-full"></div>
                      <div class="flex-1 pl-2 flex flex-col justify-center">
                        <h3 class="font-semibold">{{ p.name }}</h3>
                        <p class="text-gray-500 text-sm">{{ p.institution }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
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

interface Person {
    name: string
    institution: string
    image?: string
}

interface Committee {
    committee: string
    general_chair: [Person]
    co_chairs: Person[]
    local_organizers?: Person[]
}

interface Programme extends ParsedContent {
    body: Committee[]
}

const { data } = await useAsyncData(
    'committees',
    () => queryContent<Programme>('/committees').findOne()
);

const chairsKV = {
    general_chair: 'General Chair',
    co_chairs: 'Co-chairs',
    local_organizers: 'Local organizers'
};
</script>
