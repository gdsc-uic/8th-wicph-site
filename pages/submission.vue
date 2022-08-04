<template>
<div>
    <NuxtLayout name="page" title="Submission">
        <div class="max-w-2xl mx-auto w-full px-4 prose pb-12">
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