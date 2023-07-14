import React from "react";
import './App.css'

const App = () => {

  //assuming this items is fetched through an API endpoint.
  //right now, im just hard coding the image link and its decription
  const items = [
    { image_link: "https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg", description: "Working Image Link, Loading Seamlessly, and working Fine." },
    { image_link: "https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg", description: "working Image Link, Loading Seamlessly, and working Fine." },
    { image_link: "brokenImageLink", description: "Broken Image Link, It takes you to the fallback image url, displaying that image link is broken" },
    { image_link: "https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg", description: "working Image Link, Loading Seamlessly, and working Fine." },
    { image_link: "brokenImageLink", description: "Broken Image Link, It takes you to the fallback image url, displaying that image link is broken" }
  ];

  return (
    <div className="card-container" >
      {items.map((item, index) => (
        <Card key={index} image_link={item.image_link} description={item.description} />
      ))}
    </div>
  );
};

const Card = ({ image_link, description }) => {
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite fallback loop
    e.target.src =
      "https://www.shutterstock.com/image-illustration/image-flickering-loading-error-text-600w-2002470608.jpg";
  };

  return (
    <div className="card">
      <img className="card-image" src={image_link} onError={handleImageError} alt="Item" />
      <p className="card-description">{description}</p>
    </div>
  );
};

export default App;
