import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

import FilterInput from "../Atoms/FilterInput";
import Calendar from "../Atoms/Calendar";

const CalendarApp = () => {
  return (
    <Container>
      <Row className="row mt-3 mb-3">
        <Col xs={12}>
          <FilterInput options={["Gustavo", "seganfredo", "farias"]} />
        </Col>
      </Row>
      <Row className="row">
        <Col xs={12}>
          <Calendar events={[]} />
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarApp;
