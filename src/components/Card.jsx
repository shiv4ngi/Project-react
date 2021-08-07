import "./Card.css";
import { Button } from "react-bootstrap";

const Card = () => {
  return (
    <div className="container container-box  text-center">
      <div className="row row-cols-1 row-cols-md-2 mb-2">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-body">
            <h2 className="card-text">Ready for autumn collection</h2>
            <p>
              Treat yourself to some of our brand new autumn collection - all
              with the wonderful colours surrounding you
            </p>
            <Button className="cardButton" variant="outline-dark" size="sm">
              PURCHASE NOW
            </Button>
          </div>
          <img
            className="boxImg bd-placeholder-img card-img-top"
            src="./boxImg1.png"
          ></img>
        </div>
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-body">
            <h2 className="card-text">Ready for autumn collection</h2>
            <p>
              Treat yourself to some of our brand new autumn collection - all
              with the wonderful colours surrounding you
            </p>
            <Button className="cardButton" variant="outline-dark" size="sm">
              PURCHASE NOW
            </Button>
          </div>
          <img
            className="boxImg bd-placeholder-img card-img-top"
            src="./boxImg2.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
