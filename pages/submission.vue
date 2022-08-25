<template>
<div>
    <NuxtLayout name="page" title="Submission">
        <div class="submission-content max-w-2xl mx-auto w-full px-4 prose-lg pb-12">
            <ContentRenderer :value="data">
                <ContentRendererMarkdown :value="data" />
            </ContentRenderer>
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
.submission-content h2 a {
    @apply !no-underline !font-bold !text-secondary-800;
}

.submission-content :not(h2) a {
    @apply underline text-secondary-800;
}
</style>