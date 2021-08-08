import "./Middle.css";
import Button from "./Button";

const Middle = () => {
  return (
    <>
      <div className="container img-container py-0">
        <img className="imgMid" src="./img1.png" alt="firstImg" />
        <div className="text-block text-center">
          <h2>
            <span>The gift of happiness.</span>
          </h2>
          <p>
            Show your gratitude with one of our gift sets large and small
            specially designed to spread joy to someone you love
          </p>
          <br />
          <Button buttonTitle="SHOP NOW" />
        </div>
      </div>
    </>
  );
};
export default Middle;
