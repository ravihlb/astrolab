import fs from 'node:fs/promises'
import { json } from '@sveltejs/kit'

const postsDirPath = 'src/routes/posts/';

export async function GET() {
    const files = await fs.readdir(postsDirPath)

    // removes "+layout.svelte"
    files.shift()

    // for each folder under postsDirPath, we import the related metadata.ts file.
    const imports: Promise<Record<string, any>>[] = [];
    for (const file of files) {
        /* @vite-ignore */
        const promise = import('/' + postsDirPath + file + '/metadata.ts')
        imports.push(promise)
    }

    const metadataSet = await Promise.all(imports)
    metadataSet.map((v, idx, arr) => {
        arr[idx] = v.default
    })

    return json(metadataSet)
}
