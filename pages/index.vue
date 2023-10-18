<template>
    <div class="opener m-10 flex flex-col items-center">
        <div class="opener_text h-auto w-2/3 mt-24 mb-12">
            <h1 class="text-3xl font-medium text-para">
                <PrismicRichText
                    class="opener-text text-center"
                    :field="document.data.opener_text"
                />
            </h1>
        </div>
            <SliceZone :components="components" :slices="document.data.slices" class="flex flex-row flex-wrap items-center justify-evenly w-2/3"/>
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
/* .opener-text {
    font-family: miller-display, serif;
} */
</style>
