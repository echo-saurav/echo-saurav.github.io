import { Col, Container, Image, Row } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Row >
                <Col style={{ backgroundColor: "pink" }} lg={6} md={12} sm={12} >
                    <h1>Welcome</h1>
                    <p>You can find me at  this places</p>
                    <p>Contact me if you have queries!</p>
                    <a href="https://echo-saurav.github.io/docs/">my documentations</a>
                    <p>or Contact me</p>
                </Col>
                <Col style={{ backgroundColor: "aqua" }} lg={6} md={12} sm={12}>
                    <h1>Todo</h1>
                    <ul>
                        <li>Input basic information</li>
                        <li>Find a good lib for making sciency visual from big to small and timeline for big bang to heat death </li>
                        <li>three.js looks fine, but i don't wanna learn something new that i won't use much </li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}





