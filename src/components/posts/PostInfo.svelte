<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    export let metadata: PostMetadata;
    const { date, authors } = metadata;
</script>

<section id="post-header">
    <br />
    <strong id="published-on">Published on</strong>
    {new Date(date).toString()}
    <br />
    <strong id="authored-by">Authored by:</strong>
    <span id="authors">{authors}</span>
    <br />
</section>
