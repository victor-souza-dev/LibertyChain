<!-- .vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, watchEffect } from 'vue'
import { useRouter, useData } from 'vitepress'
import mediumZoom from 'medium-zoom'

const inBrowser = typeof window !== 'undefined';

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})

const { Layout } = DefaultTheme
const router = useRouter()

// Setup medium zoom
const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

// Apply medium zoom on load
onMounted(setupMediumZoom);

// Subscribe to route changes to re-apply medium zoom effect
router.onAfterRouteChanged = setupMediumZoom;
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

.vp-nolebase-git-changelog-history {
  background-color: var(--vp-custom-block-info-bg);
}
</style>