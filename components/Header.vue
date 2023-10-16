<template>
    <header>
        <div
            class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none"
        >
            <NuxtLink :to="'/'" class="flex text-4xl font-weight-400">
                <h1 class="paraText text-para">
                    {{ navbar.data.logo_text[0].text.slice(0, 4) }}
                </h1>
                <h1 class="printText text-print">
                    {{ navbar.data.logo_text[0].text.slice(4) }}
                </h1>
            </NuxtLink>
            <nav>
                <ul class="flex flex-wrap gap-6 md:gap-10">
                    <li
                        v-for="item in navbar.data.navlink"
                        :key="$prismic.asText(item.label)"
                        class="font-semibold tracking-tight text-red-500"
                    >
                        <PrismicLink :field="item.link">
                            {{ $prismic.asText(item.label) }}
                        </PrismicLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        navbar: {
            type: Object,
            required: true,
        },
    },
}
</script>
