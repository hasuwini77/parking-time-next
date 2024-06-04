import { Entry, EntrySkeletonType } from 'contentful';

// Define the type for your Contentful entries
interface NewsPostFields extends EntrySkeletonType {
  title: string;
  body: string;
}

// Define the props expected by OurNews component
interface NewsPostProps {
  newsPost: Entry<NewsPostFields>[];
}

const OurNews: React.FC<NewsPostProps> = ({ newsPost }) => {
  console.log(newsPost);
  return (
    <div>
      <h1>Our News</h1>
      {newsPost.map((post) => (
        <div key={post.sys.id}>
          <h2>{typeof post.fields.title === 'string' ? post.fields.title : 'Untitled'}</h2>
          <p>{typeof post.fields.body === 'string' ? post.fields.body : 'No content available.'}</p>
        </div>
      ))}
    </div>
  );
};

export default OurNews;
