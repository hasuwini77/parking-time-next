import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
});

export const fetchNewsPosts = async () => {
    try {
      const res = await client.getEntries({ content_type: 'newsPost' });
      return res.items;
    } catch (error) {
      console.error('Error fetching news posts:', error);
      throw new Error('Failed to fetch news posts.');
    }
  };