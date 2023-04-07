import { useEffect, useState } from 'react';

export const useDocumentTitle = (pageTitle: string) => {
  const [title, setTitle] = useState(pageTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return { title, setTitle };
};
