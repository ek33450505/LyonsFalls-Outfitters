import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const reports = [
  {
    title: "Mohican 100 - 2024",
    content: "This was one of the toughest races I've ever done. The terrain was challenging, but I managed to push through and finish strong."
  },
  {
    title: "Western States 100 - 2023",
    content: "An amazing experience! The heat was intense, but the support from the community kept me going."
  }
];

const RaceReport = () => {
  return (
    <Container className="race-report-container">
      <h1>Race Reports</h1>
      <Row className="justify-content-md-center">
        <Col lg={12} md={12} sm={6}>
          {reports.map((report, index) => (
            <Card className="mb-4" key={index}>
              <Card.Body>
                <Card.Title>{report.title}</Card.Title>
                <Card.Text>{report.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default RaceReport;


