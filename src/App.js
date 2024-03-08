import React, { useState, useEffect } from "react";
import "./assets/main.css";
import Card from './components/card'

function App() {
  // Creating the states for the gallery
  const [isloading, setIsLoading] = useState(true);
  const [pics, setPics] = useState([]);
  const [term, setTerm] = useState('');

  // Creating the fetching part  using the useEffect
  useEffect(() => {
    let url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPics(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-3 gap-4">
        {pics.map(image => (
          (image.previewHeight >= 150)?<Card key={image.id} image={image} />:null
        ))}
      </div>
    </div>
  );
}

export default App;
