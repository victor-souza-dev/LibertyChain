<script setup lang="ts">
import { useRouter } from 'vitepress'

interface IFlag {
  name: string;
  src: string;
  langNavigate: string;
}

const props = defineProps<{
  flags: IFlag[];
}>();

const router = useRouter();

function navigateTo(url: string) {
  router.go(`${url}/`);
}
</script>

<template>
  <div class="flag-container">
    <div
      v-for="(flag, idx) in flags"
      :key="flag.name + idx"
      class="flag-card"
      @click="navigateTo(flag.langNavigate)"
    >
      <img :src="flag.src" :alt="`${flag.name} Flag`" class="flag-image" />
      <span class="flag-name">{{ flag.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.flag-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  padding: 24px 0;
}

.flag-card {
  cursor: pointer;
  background: var(--vp-c-bg-alt);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 
    transform 0.18s cubic-bezier(.4,2,.6,1),
    box-shadow 0.18s cubic-bezier(.4,2,.6,1),
    background 0.18s;
  position: relative;
  overflow: hidden;
}

.flag-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  background: linear-gradient(120deg, rgba(80,180,255,0.12) 0%, rgba(255,255,255,0.04) 100%);
  opacity: 0;
  transition: opacity 0.18s;
  pointer-events: none;
}

.flag-card:hover,
.flag-card:focus-visible {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px rgba(80,180,255,0.18), 0 2px 8px rgba(0,0,0,0.12);
  background: var(--vp-c-bg);
}

.flag-card:hover::before,
.flag-card:focus-visible::before {
  opacity: 1;
}

.flag-image {
  height: 148px;
  width: 220px;
  border-radius: 10px;
  margin-bottom: 18px;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(80,180,255,0.10);
  border: 2px solid transparent;
  transition: border 0.18s;
}

.flag-card:hover .flag-image,
.flag-card:focus-visible .flag-image {
  border: 2px solid var(--vp-c-brand);
}

.flag-name {
  font-weight: bold;
  font-size: 1.18em;
  color: var(--vp-c-text);
  letter-spacing: 0.04em;
  text-shadow: 0 1px 4px rgba(80,180,255,0.10);
  margin-top: 4px;
  transition: color 0.18s;
}

.flag-card:hover .flag-name,
.flag-card:focus-visible .flag-name {
  color: var(--vp-c-brand);
}
</style>
