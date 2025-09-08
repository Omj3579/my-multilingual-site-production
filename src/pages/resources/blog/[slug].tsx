import React from 'react';
import { useRouter } from 'next/router';

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This blog post is under development.</p>
    </div>
  );
};

export default BlogPost;