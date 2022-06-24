import { useState, useEffect, useCallback } from "react";

import { EmployeeRow } from "./components/EmployeeRow";
import { Search } from "./components/Search";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
    );
    const json = await response.json();
    setData(json);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <div className="App">
      <Search />
      <EmployeeRow employees={data} />
    </div>
  );
}
