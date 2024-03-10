import React, { useState, useEffect } from "react";
import "./assets/main.css";
import Card from './components/card'
import Search from "./components/imageSearch";

function App() {
  // Creating the states for the gallery
  const [isloading, setIsLoading] = useState(true);
  const [pics, setPics] = useState([]);
  const [term, setTerm] = useState('');
  let [page, setPage] = useState(1);

  // Creating the fetching part  using the useEffect
  useEffect(() => {
    let url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=9&page=${page}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPics(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.error(err))
  }, [term, page]);

  const handleNext = () =>{
    setPage(page++);
  }
  
  const handlePrev = () =>{
    setPage(page--);
  }

  return (
    <div className="container mx-auto my-5">
      <Search search={(value) => setTerm(value)} />
      {!isloading && pics.length === 0 && <h1 className="text-6xl font-semibold text-center mt-32 mx-auto">No Results found</h1>}
      {isloading ? <h1 className="text-5xl font-medium text-center mt-32 mx-auto">Loading...</h1> : <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
        {pics.map(image => (
          <Card key={image.id} image={image} />
        ))}
      </div>}
      <div className="flex mx-auto mtk-20  justify-between font-bold text-blue-500">
        <button type="button" onClick={handlePrev} disabled={page<=1 || pics.length === 0} className="text-6xl hover:text-blue-700 disabled:text-gray-500"><i className='bx bxs-left-arrow-square transition-all'></i></button>
        <button className="text-6xl hover:text-blue-700 disabled:text-gray-500" type="button" onClick={handleNext} disabled={page>=(pics.totalHits/9) || pics.length === 0}><i className='bx bxs-right-arrow-square transition-colors'></i></button>
      </div>
    </div>
  );
}

export default App;
