---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle } from 'vitepress/theme'
import FlagCard from '../.vitepress/components/FlagCard.vue'

const items = [
    {
        name: "USA",
        src: "https://flagcdn.com/w320/us.png",
        langNavigate: "en"
    },
    {
        name: "Brazil",
        src: "https://flagcdn.com/w320/br.png",
        langNavigate: "ptbr"
    }
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            What is your country?
        </template>
    </VPTeamPageTitle>
    <FlagCard :flags="items" />
</VPTeamPage>
