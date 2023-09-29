<template>
    <header>
        <div
            class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none"
        >
            <NuxtLink :to="'/'">
                <PrismicRichText
                    v-if="navbar.data.logo_text"
                    :field="navbar.data.logo_text"
                />
            </NuxtLink>
            <nav>
                <ul class="flex flex-wrap gap-6 md:gap-10">
                    <li
                        v-for="item in navbar.data.navlink"
                        :key="$prismic.asText(item.label)"
                        class="font-semibold tracking-tight text-slate-800"
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
