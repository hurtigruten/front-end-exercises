import { useState } from 'react';

export const Search = (props: any) => {
  const [query, setQuery] = useState(null);

  // TODO: make the search pass the accessibility test
  return (
    <div>
      <div className="mt-1 flex items-center">
        <input
          type="text"
          placeholder="Type here..."
          id="search"
          className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};
