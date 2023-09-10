import { useState } from "react";
import "./PortfolioCard.css";

function PortfolioCard(props) {
  const { cardImage, title, description, likes, selected } = props;
  const [liked, setLiked] = useState(false);

  return (
    <div className={selected ? "portfolio-card-selected" : "portfolio-card"}>
      <div>
        <div className="card-image">
          <img src={cardImage} alt={`image-${title}`} />
        </div>
        <div className="card-details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-actions">
        <img
          width={"25px"}
          height={"25px"}
          src={liked ? "/assets/heart_filled.png" : "/assets/heart.png"}
          onClick={() => setLiked((like) => !like)}
        />
        <h6>{liked ? likes + 1 : likes}</h6>
      </div>
    </div>
  );
}

export default PortfolioCard;
