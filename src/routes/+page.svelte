<script lang="typescript">
    import PostsClient from "../client/posts";
    import PostsList from "../components/posts/PostList.svelte";

    async function listPosts() {
        const response = await PostsClient.get();
        console.log(response);
    }
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

<button on:click={listPosts}>List Posts, I dare you!</button>

<h2>Posts</h2>

<PostsList />

<style lang="css">
    h1 {
        color: var(--default-text-color);

        @media screen and (prefers-color-scheme: dark) {
            color: var(--default-text-color-dark);
        }
    }
</style>
