import React from 'react';
import CarouselControl from './components/carousel';

const App = () => {
  const photos = [
   "image1.jpg",
   "image2.jpg", 
   "image3.jpg"
  ];

  return(
    <div className="App">
      <CarouselControl items={photos} />
    </div>
  )
};

export default App;
