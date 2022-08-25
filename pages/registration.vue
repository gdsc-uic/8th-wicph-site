<template>
<div>
    <NuxtLayout name="page" title="Registration">
        
        <div class="container py-12">
            <div class="border border-primary-400 bg-primary-50 p-4 rounded-lg mb-8">
                <p><b>Cannot access the form?</b> You may try again register by clicking to this <a class="underline text-secondary-800" :href="`${formLink}?usp=sf_link`" target="_blank">link</a>.</p>
            </div>

            <iframe :src="`${formLink}?embedded=true`" style="width: 100%;" height="1751" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
            </iframe>
        </div>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfmGo-IlpzIS2F74sttXUblPov4C3GWDAdSkLuZ5f8aQrWpWw/viewform"

definePageMeta({
    layout: false
});
</script>