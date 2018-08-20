import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Media
} from "reactstrap";

const RenderDish = ({ dish }) => {
  return dish ? (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  ) : (
    <div />
  );
};

const RenderComments = ({ comments }) => {
  return comments ? (
    <Media list left>
      {comments.map(comment => {
        return (
          <Media key={comment.id} left>
            <p>{comment.comment}</p>
            <p>
              - - {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </Media>
        );
      })}
    </Media>
  ) : (
    <div />
  );
};

const DishDetail = ({ dish }) => {
  return dish ? (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>

        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <RenderComments comments={dish.comments} />
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default DishDetail;
