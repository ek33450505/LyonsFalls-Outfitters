// src/Components/Results.js
import React from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const resultsData = {
  2024: [
    { name: "Edward Kubiak", division: "37", time: "27:52:07", raceName: "Mohican 100", location: "Loudonville, OH", date: "Jun 1, 2024", distance: "100 Miles" }
  ],
  2023: [
    { name: "Edward Kubiak", division: "36", time: "26:51:41", raceName: "Rim to River 100", location: "New River Gorge, WV", date: "Nov 4, 2023", distance: "100 Miles" },
    { name: "Edward Kubiak", division: "36", time: "11:53:17", raceName: "Burning River", location: "Willoughby Hills, OH", date: "Jul 29, 2023", distance: "50 Miles" }
  ],
  2022: [
    { name: "Edward Kubiak", division: "35", time: "3:30:45", raceName: "Mo Fall Marathon", location: "Loudonville, OH", date: "Oct 15, 2022", distance: "Marathon" },
    { name: "Edward Kubiak", division: "35", time: "1:45:23", raceName: "Mo Fall Half Marathon", location: "Loudonville, OH", date: "Sep 10, 2022", distance: "Half Marathon" },
    { name: "Edward Kubiak", division: "35", time: "82.6", raceName: "Miakonda Trail Ultra", location: "Toledo, OH", date: "Sep 3, 2022", distance: "24 Hours" },
    { name: "Edward Kubiak", division: "35", time: "11:38:08", raceName: "Mohican 50", location: "Loudonville, OH", date: "Jun 4, 2022", distance: "50 Miles" },
    { name: "Edward Kubiak", division: "34", time: "6:25:48", raceName: "Rocks and Roots Trail Series #1", location: "Alum Creek State Park, OH", date: "Jan 16, 2022", distance: "50 KM" }
  ],
  2021: [
    { name: "Edward Kubiak", division: "M 34", time: "24:49:02", raceName: "Canal Corridor 100 Mile Endurance Run", location: "Akron, OH", date: "Oct 9, 2021", distance: "100 Miles" }
  ],
  2020: [
    { name: "Edward Kubiak", division: "M 32", time: "6:19:33", raceName: "Root and Rock Trail Series #1", location: "Alum Creek State Park, OH", date: "Jan 12, 2020", distance: "50K" }
  ]
};

const Results = () => {
  const { year } = useParams();
  const result = resultsData[year];

  return (
    <Container className="results-container">
      <h1>Results for {year}</h1>
      {result ? (
        result.map((race, index) => (
          <Row key={index} className="justify-content-md-center">
            <Col md={12} sm={6}>
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Time</th>
                    <th>Race Name</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Distance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{race.name}</td>
                    <td>{race.division}</td>
                    <td>{race.time}</td>
                    <td>{race.raceName}</td>
                    <td>{race.location}</td>
                    <td>{race.date}</td>
                    <td>{race.distance}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        ))
      ) : (
        <p>No results available for {year}</p>
      )}
    </Container>
  );
};

export default Results;

