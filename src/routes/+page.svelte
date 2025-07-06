<script lang="ts">
    import { page } from "$app/stores";
    import { get } from "svelte/store";
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    import PostsList from "@components/posts/PostList.svelte";

    let posts: PostMetadata[] = get(page).data.posts;
</script>

<h1 class="center-text">
    <span class="accent-color"> Welcome </span>
    to
    <span class="accent-color"> Astrolab </span>
</h1>

<p class="center-text">
    Here you'll find a compendium of guides and articles about computer science,
    programming, tech and some miscelaneous interesting stuff.
</p>

<h2>Posts</h2>

<PostsList {posts} />

<style lang="css">
    h1 {
        color: var(--default-text-color);

        @media screen and (prefers-color-scheme: dark) {
            color: var(--default-text-color-dark);
        }
    }
</style>
