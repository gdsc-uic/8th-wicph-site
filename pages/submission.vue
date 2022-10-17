<template>
<div>
    <NuxtLayout name="page" title="Submission">
        <div class="container flex flex-col-reverse md:flex-row px-4">
            <div class="md:ml-4 md:mt-8 mb-8 w-full md:w-1/2">
                <span id="guidelines" class="block text-3xl text-secondary-800 font-bold">Guidelines</span>

                <div class=" submission-content prose">
                    <ContentRenderer :value="data">
                        <ContentRendererMarkdown :value="data" />
                    </ContentRenderer>
                </div>
            </div>

            <div class="py-8 md:px-8 w-full md:w-1/2">
                <div class="border p-8 flex flex-col text-center justify-center items-center bg-secondary-50 border-secondary-800 rounded-lg h-full">
                    <svg class="h-48 w-48 text-secondary-700" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16Z"/>
                    </svg>

                    <span class="text-2xl font-bold pb-8">Submit your extended abstract here</span>
                    <a href="https://easychair.org/cfp/wicph2022" target="_blank" class="flex text-xl items-center text-white bg-secondary-800 hover:bg-secondary-900 rounded-full px-6 py-3">
                        <span class="font-semibold">Easychair Link</span>
                        <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6q.425 0 .713.287Q12 3.575 12 4t-.287.712Q11.425 5 11 5H5v14h14v-6q0-.425.288-.713Q19.575 12 20 12t.712.287Q21 12.575 21 13v6q0 .825-.587 1.413Q19.825 21 19 21Zm4-6q-.275-.275-.275-.7q0-.425.275-.7L17.6 5H15q-.425 0-.712-.288Q14 4.425 14 4t.288-.713Q14.575 3 15 3h5q.425 0 .712.287Q21 3.575 21 4v5q0 .425-.288.712Q20.425 10 20 10t-.712-.288Q19 9.425 19 9V6.4l-8.625 8.625q-.275.275-.675.275T9 15Z"/>
                        </svg>
                    </a>
                    <span class="mt-2 text-gray-600">Opens the link in a new tab</span>
                </div>
            </div>
        </div>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
});

const { data } = await useAsyncData('submission', () => queryContent('/submission_guidelines').findOne());
</script>

<style lang="postcss">
.submission-content {
    @apply text-black;
}

.submission-content h2 a {
    @apply !no-underline !font-bold !text-secondary-800;
}

.submission-content :not(h2) a {
    @apply underline text-secondary-800;
}
</style>