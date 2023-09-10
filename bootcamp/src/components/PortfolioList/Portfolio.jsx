import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolio.css";

const PortfolioList = (props) => {
  const { itemsList = [], selectedItem } = props;

  return (
    <div className="portfolio-container">
      {itemsList.map((item) => {
        const { title, category, image, likes, description, id } = item;

        return (
          <PortfolioCard
            key={id}
            cardImage={image}
            title={title}
            description={description}
            likes={likes}
            selected={selectedItem.toLowerCase() === category.toLowerCase()}
          />
        );
      })}
    </div>
  );
};

export default PortfolioList;
