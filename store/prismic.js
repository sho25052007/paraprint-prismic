export const state = () => ({
    navbar: {},
})

export const mutations = {
    setNavbar(state, navbar) {
        state.navbar = navbar
    },
}

export const actions = {
    async loadNavbar({ commit }) {
        try {
            const navbar = await this.$prismic.api.getSingle("navbar")
            if (navbar.uid === "navbar") commit("setNavbar", navbar)
        } catch (error) {
            console.error(e)
            throw new Error({
                statusCode: 503,
                message: "Error loading navbar",
            })
        }
    },
}
