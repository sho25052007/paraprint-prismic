<template>
    <section
        :data-slice-type="slice.slice_type"
        :data-slice-variation="slice.variation"

    >
        <PrismicLink :field="slice.primary.link" >
            <span class="action-button-text
            relative
            text-2xl
            text-para
            hover:text-para
            hover:bg-para
            before:bg-para
            before:left-0
            before:bottom-0
            before:h-1/2
            ">{{this.slice.primary.label[0].text}}</span>
        </PrismicLink>
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

<style scoped>
.action-button-text {
    font-family: 'miller-display', serif;
}

.action-button-text::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  /* bottom: 0; */
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.action-button-text:hover::before {
  transform: scaleX(1);
}
</style>