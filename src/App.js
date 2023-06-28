import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



function App() {

const [data, setData] = useState({ hits: [] })
 
  
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://hn.algolia.com/api/v1/search?query=redux');
      console.log(result)
       setData(result.data)
    }
    fetchData();
  }, [])

  return (
    <ul>
      {data.hits.map((item) => {
        //keys
        //React requires a unique key for each element
      return  <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      })
      }
   </ul>
  );
}

export default App;