<template>
    <header class="bg-primary-400 text-secondary-400">
        <div class="pt-4 container">
            <a href="/">WiCPH2022</a>
            
            <div class="pt-4 ml-auto flex items-center space-x-4 font-semibold border-b border-secondary-400">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/committees">Committees</NuxtLink>
                <NuxtLink to="/submission">Submission</NuxtLink>
                <NuxtLink to="/programme">Programme</NuxtLink>
                <NuxtLink to="/registration">Registration</NuxtLink>
            </div>
        </div>
    </header>
</template>

<style lang="postcss" scoped>
.router-link-exact-active {
    @apply border-b-4 border-secondary-400 pb-3;
}

a:not(.router-link-exact-active) {
    @apply pb-4;
}
</style>