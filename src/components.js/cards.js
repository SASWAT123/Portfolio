import React from "react";
import card_img from "../card_img.jpg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardView = (props) => {
  return (
    <div>
      <Card className="card_template">
        <CardImg top width="100%" src={card_img} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h4>{props.cardDetails.title}</h4>
          </CardTitle>
          <CardSubtitle>
            <h6>{props.cardDetails.technology}</h6>
          </CardSubtitle>
          <CardText className="card_text">
            {props.cardDetails.description}
          </CardText>
          <a
            className="git_link"
            target="_blank"
            href={props.cardDetails.link}
            style={{ color: "black" }}
          >
            <i class="fa fa-github" aria-hidden="true">
              {" "}
              Source Code
            </i>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardView;
