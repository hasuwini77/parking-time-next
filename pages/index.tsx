import { GetStaticProps } from 'next';
import { createClient, Entry, EntryCollection, EntrySkeletonType } from 'contentful';
import Home from '../app/page'; // Import the Home component from the app directory

interface NewsPostFields extends EntrySkeletonType {
  fields: {
    title: string;
    body: string;
  };
}

interface HomeProps {
  newsPost: Entry<NewsPostFields>[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const res: EntryCollection<NewsPostFields> = await client.getEntries<NewsPostFields>({
    content_type: 'newsPost',
  });

  return {
    props: {
      newsPost: res.items,
    },
  };
};

export default Home;
