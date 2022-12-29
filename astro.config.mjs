import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import NetlifyCMS from 'astro-netlify-cms'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
    integrations: [
        image(),
        mdx(),
        sitemap(),
        NetlifyCMS({
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'main',
                },
                collections: [
                    // Content collections
                    {
                        name: 'blog',
                        label: 'Blog',
                        folder: 'src/pages/blog',
                        create: true,
                        delete: true,
                        slug: '{{slug}}',
                        fields: [
                            {
                                label: 'Layout',
                                name: 'layout',
                                widget: 'hidden',
                                default: '../../layouts/BlogPost.astro',
                            },
                            { label: 'Title', name: 'title', widget: 'string' },
                            {
                                label: 'Description',
                                name: 'description',
                                widget: 'string',
                            },
                            {
                                label: 'Publish Date',
                                name: 'publishDate',
                                widget: 'datetime',
                            },
                            {
                                label: 'Hero Image',
                                name: 'heroImage',
                                widget: 'image',
                            },
                            { label: 'Body', name: 'body', widget: 'markdown' },
                        ],
                    },
                ],
            },
        }),
    ],
})
