'use client'
import React, { useEffect, useState } from 'react';
import { Entry, EntrySkeletonType } from 'contentful';
import { fetchNewsPosts } from '@/utils/fetchContentful';

interface NewsPostFields extends EntrySkeletonType {
  title: string;
  body: string;
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
    <div>
      <h1>Our News</h1>
      {newsPosts.map((post) => (
        <div key={post.sys.id}>
          <h2>{typeof post.fields.title === 'string' ? post.fields.title : 'Untitled'}</h2>
          <p>{typeof post.fields.body === 'string' ? post.fields.body : 'No content available.'}</p>
        </div>
      ))}
    </div>
  );
};

export default OurNews;
