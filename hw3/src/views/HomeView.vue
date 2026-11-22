<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PostCard from '../components/PostCard.vue'
import ResetLikeButton from '../components/ResetLikeButton.vue'

const store = useStore()

const posts = computed(() => store.state.posts)
</script>

<template>
    <main class="index-main">
        <aside class="side-panel"></aside>
        <ResetLikeButton />
        <section class="posts">
            <!-- 
                Käib kõik postitused ükshaaval läbi ja iga postituse jaoks luuakse PostCard komponent.
                :key annab Vuele iga komponendi jaoks unikaalse võtme.
                :post-id edastab postituse ID alamkomponendile.
            -->
            <PostCard
                v-for="post in posts"
                :key="post.id"
                :post-id="post.id"
            />
        </section>

        <aside class="side-panel"></aside>
    </main>
</template>

<style scoped>
.index-main {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>