<template>
    <div>
        <Header v-if="navbar.data" :navbar="navbar" />
        <main>
            <Nuxt />
        </main>
        <!-- <Footer v-if="settings.data" :settings="settings" /> -->
    </div>
</template>

<script>
import Header from "~/components/Header.vue"
export default {
    components: {
        Header,
    },
    created() {
        this.loadNavbar()
    },
    methods: {
        loadNavbar() {
            this.$store.dispatch("prismic/loadNavbar")
        },
    },
    computed: {
        navbar() {
            return this.$store.state.prismic.navbar
        },
    },
}
</script>

<style>
body {
    font-family: industry, sans-serif;
}
</style>
