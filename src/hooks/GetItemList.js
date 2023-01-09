import axios from "axios";
import { useEffect, useState } from "react";

export const GetItemList = () => {
  
  const [list, setList] = useState({});
  const [items, setItems] = useState([]);

  async function Items() {
    const response = await axios.get(
      `https://www.mocky.io/v2/5b15c4923100004a006f3c07`
    );
    try {
      setList(response.data);
      setItems(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Items();
  }, []);
  return [list, items];
};