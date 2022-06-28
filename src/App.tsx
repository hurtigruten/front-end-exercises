import { useState, useEffect, useCallback } from 'react';

import { EmployeeRow } from './components/EmployeeRow';
import './styles.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = useCallback(async () => {
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    setData(json.users);
  }, []);

  const searchUsers = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${query}`
    );
    const json = await response.json();
    setData(json.users);
  }, [query]);

  const handleSearch = (value) => {
    setQuery(value);
    searchUsers();
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="App">
      <div>
        <div className="mt-1 flex items-center">
          <input
            type="text"
            placeholder="Type here..."
            id="search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <EmployeeRow employees={data} />
    </div>
  );
}
