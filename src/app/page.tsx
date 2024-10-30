"use client";

import { useEffect, useState } from 'react';

const FileReader: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch('/api/getpath');

        const data = await response.json();
        setContent(data.content);
        console.log("content:", data.content)
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchFileContent();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {content ? <pre>{content}</pre> : 'Loading...'}
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>File Content</h1>
      <FileReader />
    </div>
  );
};

export default HomePage;
