import { createStore } from 'vuex'
import postsData from '../data/posts.json'

// Vuexi andmehoidla (store) loomine
export default createStore({
    // state hoiab andmeid, mida erinevad Vue komponendid saavad kasutada
    state: () => ({
        // Võtab JSONist postitused, loob uue massiivi ja lisab igale postitusele likes külge
        posts: postsData.map(post => ({
            ...post,
            likes: 0
        }))
    }),

    mutations: {
        incrementLike(state, postId) {
            // Otsib postituse ID järgi
            const post = state.posts.find(p => p.id === postId)

            // Kui postitus leiti, suurendame meeldimiste arvu
            if (post) {
                post.likes++
            }
        },

        resetLikes(state) {
            // Käib kõik postitused läbi ja nullib meeldimiste arvud
            state.posts.forEach(post => {
                post.likes = 0
            })
        }
    }
})