import { useState,useEffect } from "react";

const useData = (url)=>{
    const [products, setProducts]= useState([]);
    const [loading, setLoading] = useState(true);
const fetchData = async () => {
    try {
      const response = await fetch(url);
      // const response = await fetch("http://localhost:3001/posts");
      const result = await response.json();
      console.log(result.products);
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.error("Error in Fetching Data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
    return [loading, products];

}
export default useData;