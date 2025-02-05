import React, { useState, useEffect } from "react";
import PageTree from "../components/PageTree";
import { getPage } from "../api";

const Home = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      const data = await getPage("page1");
      setPages([data]); // Assume `data` has child references
    };
    fetchPages();
  }, []);

  return <PageTree pages={pages} />;
};

export default Home;
