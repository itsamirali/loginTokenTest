import Card from "react-bootstrap/Card";
import Mybutton from "./Mybutton";

function MyCard({ width, cardTitle, cardSubTitle, cardText, cardBtn, onClick }) {
  return (
    <Card style={{ width: width }} className="mx-3">
      <Card.Body>
        {cardTitle && <Card.Title>{cardTitle}</Card.Title>}
        {cardSubTitle && (
          <Card.Subtitle className="mb-2 text-muted">
            {cardSubTitle}
          </Card.Subtitle>
        )}
        {cardText && <Card.Text>{cardText}</Card.Text>}
        {cardBtn && <Mybutton myOnClick={onClick} btnTypColor="btn-warning" childColor="whtie">{cardBtn}</Mybutton>}
      </Card.Body>
    </Card>
  );
}

export default MyCard;
