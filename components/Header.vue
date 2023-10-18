<template>
    <header>
        <div
            class="flex flex-wrap items-center justify-between m-10 leading-none"
        >
            <div class="social-media-links flex flex-wrap items-center">
                <InstagramIcon/>
                <PatreonIcon/>
                <TiktokIcon/>
                <YoutubeIcon/>
            </div>
            <div>
                <NuxtLink :to="'/'" class="flex justify-center text-5xl font-medium">
                    <h1 class="paraText text-para">
                        {{ navbar.data.logo_text[0].text.slice(0, 4) }}
                    </h1>
                    <h1 class="printText text-print">
                        {{ navbar.data.logo_text[0].text.slice(4) }}
                    </h1>
                </NuxtLink>
                <nav>
                    <ul class="flex flex-wrap">
                        <li
                            v-for="item in navbar.data.navlink"
                            :key="$prismic.asText(item.label)"
                            class="font-medium m-4 text-para text-sm"
                        >
                            <PrismicLink :field="item.link" class="nav-text">
                                {{ $prismic.asText(item.label) }}
                            </PrismicLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <CallToAction/>
            </div>
        </div>
    </header>
</template>

<script>
    import InstagramIcon from '../components/icons/instagram.vue'
    import PatreonIcon from '../components/icons/patreon.vue'
    import TiktokIcon from '../components/icons/tiktok.vue'
    import YoutubeIcon from '../components/icons/youtube.vue'
    import CallToAction from '../components/buttons/callToAction.vue'

export default {
    props: {
        navbar: {
            type: Object,
            required: true,
        },
    },
    components: { InstagramIcon, PatreonIcon, TiktokIcon, YoutubeIcon, CallToAction }
}
</script>

<style scoped>
.nav-text {
    font-family: 'miller-display', serif;
}
</style>
