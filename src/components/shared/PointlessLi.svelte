<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    import { base } from "$app/paths";

    export let metadata: PostMetadata;
</script>

<html lang="en">
    <li>
        <a href="{base}/{metadata.URL}">{metadata.title}</a>
        <br />
        {metadata.date}
    </li>
</html>

<style lang="css">
    li {
        display: inline-block;
        padding-bottom: 2.5em;
    }
</style>
