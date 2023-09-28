<template>
    <section
        :data-slice-type="slice.slice_type"
        :data-slice-variation="slice.variation"
    >
        <PrismicRichText :field="slice.primary.opener" />
        <div class="action-card">
            <PrismicRichText
                v-for="actionBtn in slice.items"
                :field="actionBtn"
            />
        </div>
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
