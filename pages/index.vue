<template>
    <div class="opener">
        <div class="opener_text">
            <h1 class="text-4xl font-bold text-red-500">
                <PrismicRichText
                    class="opener-text"
                    :field="document.data.opener_text"
                />
            </h1>
        </div>
        <SliceZone :components="components" :slices="document.data.slices" />
    </div>
</template>

<script>
import { components } from "~/slices"

export default {
    name: "IndexPage",
    data() {
        return { components }
    },
    async asyncData({ $prismic, error }) {
        const document = await $prismic.api.getByUID("homepage", "home")

        if (document) {
            return { document }
        } else {
            error({ statusCode: 404, message: "Page not found" })
        }
    },
}
</script>

<style>
.opener-text {
    font-family: miller-display, serif;
}
</style>
