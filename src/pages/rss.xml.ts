import rss from '@astrojs/rss';
import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {

    const blogPosts = await getCollection('blog')

    return rss({
        title: 'Ikeda´s Blog',
        description: 'El blog de ikedadev',
        site: context.site ?? 'undefined url',
        items: blogPosts.map( post => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link:`/posts/${post.slug}`
        })),
        // stylesheet: '/styles/rss.xsl',
        customData: `<language>es-CL</language>`,
      });
} 