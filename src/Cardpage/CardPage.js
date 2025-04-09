import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import allproduct from '../allproduct.json';

function Cardpage() {
    let cardArr = allproduct;
    return (
        <div className="row m-4">
            {cardArr.map((allcard) => ( 
                <div className="col-12 col-sm-6 col-lg-3 col-md-4 ps-4" style={{ marginBottom: "2%" }}>
                    <Card style={{ width: '18rem', height: "65vh" }}>
                        <Card.Img style={{ height: "33vh" }} variant="top" src={require('../Images/' + allcard.img)} />
                        <Card.Body>
                            <Card.Title>{allcard.Title}</Card.Title>
                            <Card.Text>{allcard.Text}</Card.Text>
                            <Button variant="primary">Order</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Cardpage;