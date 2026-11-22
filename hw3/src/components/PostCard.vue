<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

// Määrab milliseid andmeid komponent vanemalt vastu võtab ja postId ütleb millist postitust kuvada
const props = defineProps({
    postId: Number
})

// Ligipääs Vuexi store-le
const store = useStore()

// Otsib Vuexist postituse mille ID = postID ning computed hoiab tulemust reaktiivsena ja
// arvutab vajadusel uuesti (kui sõltuvad andmed muutuvad)
const post = computed(() =>
    store.state.posts.find(p => p.id === props.postId)
)
</script>

<template>
    <!-- Kuvab postituse ainult siis, kui see on leitud -->
    <article v-if="post" class="post">
        <div class="post-header">
            <!-- Kõikidel postitustel on sama vaikimisi profiilipilt -->
            <img
                src="/images/default_pilt.webp"
                alt="Profile picture"
                class="post-profile"
            >
            <p>{{ post.date }}</p>
        </div>

        <h3>{{ post.text }}</h3>

        <img
            v-if="post.image"
            :src="'/' + post.image"
            alt="Post image"
            class="post-image"
        >

        <button
            class="like-button"
            type="button"
            @click="store.commit('incrementLike', post.id)"
        >
            <img src="/images/thumbs.png" alt="Like" width="20">
            {{ post.likes }}
        </button>
    </article>
</template>


<style scoped>
.post {
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.post-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.post-image {
  max-width: 100%;
  border-radius: 8px;
}

.like-button {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
}
</style>