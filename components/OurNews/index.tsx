'use client'
import React, { useEffect, useState } from 'react';
import { Entry, EntrySkeletonType } from 'contentful';
import { fetchNewsPosts } from '@/utils/fetchContentful';
import Link from 'next/link';

interface NewsPostFields extends EntrySkeletonType {
  title: string;
  body: string;
  thumbnail?: { fields: { file: { url: string } } }; // Adjusting to match Contentful asset structure
  readingTime?: number;
  slug?: string;
}

const OurNews: React.FC = () => {
  const [newsPosts, setNewsPosts] = useState<Entry<NewsPostFields>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchNewsPosts();
        setNewsPosts(posts);
      } catch (err) {
        setError('Failed to fetch news posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container w-full min-w-full py-28 md:py-38 px-4 md:px-20 flex flex-col justify-center items-center text-center'>
      <h1 className='text-4xl'>Our News</h1>
      {newsPosts.map((post) => (
        <div key={post.sys.id}>
          <h2>{typeof post.fields.title === 'string' ? post.fields.title : 'Untitled'}</h2>
          {/* Uncomment and use if you want to include the image */}
          {/* {typeof post.fields.thumbnail?.fields.file.url === 'string' ? (
            <Image
              src={`https:${post.fields.thumbnail.fields.file.url}`}
              alt={typeof post.fields.title === 'string' ? post.fields.title : 'News image'}
              width={600}
              height={400}
            />
          ) : (
            <p>No Image available.</p>
          )} */}
          <p>{`This is ${typeof post.fields.readingTime === 'number' ? post.fields.readingTime : 'No content available.'} min Read`}</p>
          <p>{typeof post.fields.body === 'string' ? post.fields.body : 'No content available.'}</p>
          <Link href={`/newsPost/${typeof post.fields.slug === 'string' ? post.fields.slug : 'nodata'}`}>
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OurNews;
