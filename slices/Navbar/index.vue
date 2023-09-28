<template>
    <section
        :data-slice-type="slice.slice_type"
        :data-slice-variation="slice.variation"
    >
        <PrismicRichText
            :field="slice.primary.heading"
            id="main-heading"
            as="h1"
        />
    </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components"

export default {
    // The array passed to `getSliceComponentProps` is purely optional.
    // Consider it as a visual hint for you when templating your slice.
    props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="css" scoped>
#main-heading {
    color: blue;
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    padding: 0 150px;
    line-height: 1.3em;
}
</style>
