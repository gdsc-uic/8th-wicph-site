<template>
    <footer class="bg-gray-100 py-12">
        <div class="container flex flex-col">
            <section v-for="(label, key) in sections" :key="`footer_${key}`" class="flex flex-col pb-12">
                <h3 class="text-center text-xl font-bold">{{ label }}</h3>

                <div class="flex flex-wrap justify-center items-center">
                    <a v-for="(p, pi) in data[key]" :key="`partner_${key}_${pi}`" class="p-4" :href="p.website" target="_blank">
                        <img :src="'/partners_images/' + p.icon" class="inline-flex h-auto" :alt="p.name" />
                    </a>
                </div>
            </section>
        </div>

        <p class="text-center max-w-[30rem] mx-auto">Copyright &copy; 2022 Women in Computing - Computer Society of the Philippines Special Interest Group</p>
    </footer>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Entity {
    name: string
    icon: string
    website?: string
}

interface FooterContent extends ParsedContent {
    organizers: Entity[]
    co_organizers: Entity[]
    supporters: Entity[]
}

const { data } = await useAsyncData(
    'footer', 
    () => queryContent<FooterContent>('/partners').findOne()
);

const sections: Record<keyof FooterContent, string> = {
    organizers: 'Organized by',
    co_organizers: 'Co-organized by',
    supporters: 'Supported by'
}
</script>