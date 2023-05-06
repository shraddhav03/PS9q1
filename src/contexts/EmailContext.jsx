import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/fakefetch";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/allemails");
      if (response.status === 200) {
        setData(response.data.emails);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && (
        <div>
          <EmailContext.Provider value={{ data }}>
            {children}
          </EmailContext.Provider>
        </div>
      )}
    </>
  );
};
