<!-- .vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'
import mediumZoom from 'medium-zoom'

const { Layout } = DefaultTheme
const router = useRouter()

// Setup medium zoom
const setupMediumZoom = () => {
    mediumZoom("[data-zoomable]", {
        background: "transparent",
    });
};

onMounted(setupMediumZoom)
router.onAfterRouteChanged = setupMediumZoom
</script>

<template>
    <Layout>
        <!-- Conteúdo da página -->
        <template #default>
            <slot />
        </template>

        <template #nav-bar-content-after>
            <slot name="nav-bar-content-after" />
        </template>

        <template #nav-screen-content-after>
            <slot name="nav-screen-content-after" />
        </template>
    </Layout>
</template>

<style>
.medium-zoom-overlay {
    backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
    z-index: 999;
}

.VPSocialLinks.VPNavBarSocialLinks.social-links {
    margin-right: 0;
}
</style>