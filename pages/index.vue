<template>
    <!-- <h1>{{ document.data.slices[0].primary.heading[0].text }}</h1> -->
    <SliceZone :components="components" :slices="document.data.slices" />
</template>

<script>
import { components } from "~/slices"

export default {
    name: "IndexPage",
    data: function () {
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
