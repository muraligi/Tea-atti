import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Teashopimg from "../Teashopimg.json";

function Teashops() {
    let Teashopsarea = Teashopimg;
    return (
        <div className='ms-5'>
            <div style={{ fontSize: "30px", fontWeight: "700", marginBottom: "30px" }}> Discover best Tea powders on Dineout</div>
            {Teashopsarea.map((allTeashop) => (
                <div className="col-12 col-sm-6 col-lg-3 col-md-4" style={{ marginBottom: "2%" }}>
                    <Card style={{ width: '18rem', height: "65vh" }}>
                        <Card.Img style={{ height: "33vh" }} variant="top" src={require('../Images/' + allTeashop.img)} />
                        <Card.Body>
                            <Card.Title>{allTeashop.Title}</Card.Title>
                            <Card.Text>{allTeashop.Text}</Card.Text>
                            <Button variant="primary">Order</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            <br />

        </div>
    )
}

export default Teashops;