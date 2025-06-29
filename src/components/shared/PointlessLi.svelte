<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    import { base } from "$app/paths";

    export let metadata: PostMetadata;
    const { title, URL, date } = metadata;
</script>

<html lang="en">
    <li>
        <a href="{base}/{URL}">{title}</a>
        <br />
        {new Date(date).toDateString()}
    </li>
</html>

<style lang="css">
    li {
        display: inline-block;
        padding-bottom: 2.5em;
    }
</style>
