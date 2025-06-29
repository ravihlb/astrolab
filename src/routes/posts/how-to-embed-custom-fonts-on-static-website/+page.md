<script lang="ts">
    import PostHeader from '@components/posts/BasicPostHeader.svelte'
    import metadata from './metadata'
</script>

<PostHeader metadata={metadata}/>

A few weeks ago I stumbled across the channel of fellow blogger [Mischa van den Burg](https://www.youtube.com/@mischavandenburg), which has some really good stuff! 

He made this hour-long video called [Ultimate Notetaking: My Neovim Zettelkasten Based on Obsidian - Complete Walkthrough](https://www.youtube.com/watch?v=zIGJ8NTHF4k&t=881s) in which his handwritten-like font really stood out to me. And I'm pretty sure he uses the Fantasque Sans Mono font on his terminal and neovim.

I thought it looked awfully comfy and really wanted to integrate that into my daily workflow. It looks so comfortable, especially for a monospace font!

So I eventually wanted to include the font on this very blog of yours and turns out I really had no idea how to do it and had to search quite a bit for it.
I ended up finding a few blog posts and StackOverflow answers that really helped.

Also, I thought about putting "built with Sveltekit" on the title because this blog is built using [Sveltekit](https://kit.svelte.dev/) + [MDSVex](https://github.com/pngwn/MDsveX), but these tips go for pretty much any website (or webapp!) built with html.

## The Solution

1. Download the font you want to embed into your project. Preferrably, as close as possible to your global css file.
2. On your global css file, import your new `Custom Font Regular`:
```css
@font-face {
    font-family: Custom Font Regular;
    font-display: swap;
    src: local('Custom Font Regular'), url(./fonts/CustomFont-Regular.otf);
}

body {
    font-family: Custom Font Regular;
    ...
}
```
  Here, I'm importing the `CustomFont-Regular.otf` file downloaded on step 1 that was put inside a `fonts/` directory.
  ```
  .
  ├── fonts
  │   └── CustomFont-Regular.otf
  └── main.css
  ```

  Both `local()` and `url()` are css functions used for importing resources. With `url()`, you can provide a local, relative path or full http remote one.

  It's smart to use `local()` first, since this will prompt the browser to look for an installed font first.

  And that's it! Thank you for reading this article.

### References

- [Ultimate Notetaking: My Neovim Zettelkasten Based on Obsidian - Complete Walkthrough by Mischa van den Burg  - YouTube](https://www.youtube.com/watch?v=zIGJ8NTHF4k&t=881s)

- [Use custom fonts with SvelteKit - written by Lars Graubner, Founding Engineer @ STOLT](https://stolthq.com/blog/custom-fonts-sveltekit)

- [How to embed fonts in HTML? - StackOverflow](https://stackoverflow.com/questions/220236/how-to-embed-fonts-in-html)

- [Fantasque Sans Font Repository on Github](https://github.com/belluzj/fantasque-sans)

