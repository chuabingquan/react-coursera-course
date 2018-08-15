import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments) {
        if (comments) {
            return comments.map(comment => {
                return (
                    <Media list>
                        <Media key={comment.id} tag="li">
                            <Media left>
                                <p>{comment.comment}</p>
                                <p>- - {comment.author}, {comment.date}</p>
                            </Media>
                        </Media>
                    </Media>
                );
            });
        } else {
            return (
                <div>
                </div>
            )
        }
    }

    render() {
        const selectedDish = this.props.dish;

        return selectedDish ? (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(selectedDish.comments)}
                </div>
            </div>

        ) : (
            <div></div>
        );
    }
}

export default DishDetail;