<template>
    <header class="bg-gradient-to-br text-white from-secondary-700 to-secondary-800">
        <div class="container <md:px-0 flex md:flex-col md:justify-center items-center">
            <button class="md:hidden bg-secondary-900 px-2 py-1 rounded-md mr-3" @click="isMenuOpen = !isMenuOpen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            <a class="py-4 flex items-center md:mx-auto w-[79%] md:w-[45%]" :class="{ 'md:hidden': $route.name === 'index' }" href="/">
                <span class="text-xl md:text-3xl pr-4 border-r">WiCPH<b class="font-bold text-primary-400">2022</b></span>
                <span class="text-sm md:text-md pl-4">8th ACM Women in Computing Philippine Celebration</span>
            </a>
            
            <div class="desktop-nav <md:hidden flex items-center space-x-6 font-semibold" :class="{ 'md:pt-4': $route.name === 'index' }">
                <slot />
            </div>
        </div>
    </header>

    <Teleport to="body">
        <Transition name="nav" @enter="menuTransition" @leave="menuTransition">
            <div v-if="isMenuOpen" class="h-screen w-screen fixed top-0 z-50">
                <div class="mobile-nav pt-32 pr-8 z-10 bg-white fixed h-full flex flex-col w-[90%] shadow-lg">
                    <slot />
                </div>

                <div @click.self="isMenuOpen = false" class="block bg-overlay opacity-30 bg-black z-0 h-full w-full absolute inset-0"></div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const menuTransition = (_, done) => setTimeout(done, 500)
</script>

<style lang="postcss" scoped>
@keyframes navOverlay {
    0% {
        @apply opacity-0;
    }
    100% {
        @apply opacity-30;
    }
}

@keyframes navMenu {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.nav-enter-active .bg-overlay {
    animation: navOverlay 0.5s ease;
}
.nav-leave-active .bg-overlay {
  animation: navOverlay 0.5s ease reverse;
}

.nav-enter-from .bg-overlay,
.nav-leave-to .bg-overlay {
  @apply opacity-0;
}

.nav-enter-active .mobile-nav {
    animation: navMenu 0.25s ease;
}
.nav-leave-active .mobile-nav {
  animation: navMenu 0.2s ease reverse;
}

.nav-enter-from .mobile-nav,
.nav-leave-to .mobile-nav {
  transform: translateX(-100%);
}


.desktop-nav :slotted(.router-link-exact-active) {
    @apply border-b-4 border-primary-400 pb-3;
}

.desktop-nav :slotted(a:not(.router-link-exact-active)) {
    @apply pb-4;
}

.mobile-nav :slotted(.router-link-exact-active) {
    @apply font-bold text-secondary-800 bg-primary-400 hover:bg-primary-500;
}

.mobile-nav :slotted(a) {
    @apply p-4 text-2xl rounded-r-lg;
}

.mobile-nav :slotted(a:not(.router-link-exact-active)) {
    @apply font-bold hover:bg-gray-200;
}
</style>