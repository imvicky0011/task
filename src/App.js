import React from "react";

const App = () => {
  const items = [
    { image_link: "imgLink1", description: "Desc1" },
    { image_link: "imgLink2", description: "Desc2" },
    { image_link: "imgLink3", description: "Desc3" },
    { image_link: "imgLink4", description: "Desc4" },
    { image_link: "imgLink5", description: "Desc5" }
  ];

  return (
    <div>
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
      <img src={image_link} onError={handleImageError} alt="Item" />
      <p>{description}</p>
    </div>
  );
};

export default App;
