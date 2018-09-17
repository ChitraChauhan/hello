import React, { Component } from "react";
import { Form, ControlLabel, FormGroup, Col, Button } from "react-bootstrap";

class FormComponent extends Component {
    // AvoidSpace(event) {
    //   var k = event ? event.which : window.event.keyCode;
    //   if (k === 32) return false;
    // }
//   AvoidSpace(e) {
//     if (e.target.value.match(/\s/g)) {
//       alert("Sorry, you are not allowed to enter any spaces");
//       e.target.value = e.target.value.replace(/\s/g, "");
//     }
//   }
  render() {
    const { form, formErrors } = this.props;
    return (
      <Form horizontal>
        <FormGroup controlId="name">
          <Col componentClass={ControlLabel} sm={1}>
            Name :
          </Col>
          <Col sm={10}>
            <input
              type="text"
              name="name"
              placeholder="Name"
            //   onKeyPress={event => this.AvoidSpace(event)}
              className="form-control"
              value={form.name}
              onChange={e => this.props.handleInputChange(e)}
            />
            <p style={{ color: "red" }}>{formErrors.name}</p>
          </Col>
        </FormGroup>
        <FormGroup controlId="date">
          <Col componentClass={ControlLabel} sm={1}>
            Date :
          </Col>
          <Col sm={10}>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="form-control"
              value={form.date}
              onChange={e => this.props.handleInputChange(e)}
            />
            <p style={{ color: "red" }}>{formErrors.date}</p>
          </Col>
        </FormGroup>
        <FormGroup controlId="description">
          <Col componentClass={ControlLabel} sm={1}>
            Description:
          </Col>
          <Col sm={10}>
            <input
              type="text"
              name="description"
              placeholder="description"
              className="form-control"
              value={form.description}
              onChange={e => this.props.handleInputChange(e)}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="duration">
          <Col componentClass={ControlLabel} sm={1}>
            Duration:
          </Col>
          <Col sm={10}>
            <input
              type="number"
              name="duration"
              placeholder="duration"
              className="form-control"
              value={form.duration}
              onChange={e => this.props.handleInputChange(e)}
            />
            <p style={{ color: "red" }}>{formErrors.duration}</p>
          </Col>
        </FormGroup>
        <FormGroup controlId="status">
          <Col componentClass={ControlLabel} sm={1}>
            Status :
          </Col>
          <Col sm={10}>
            <select
              name="status"
              value={form.status}
              className="form-control"
              onChange={e => this.props.handleInputChange(e)}
            >
              <option value="new">New</option>
              <option value="inProgress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={1} sm={10}>
            <Button
              type="submit"
              bsStyle="primary"
              onClick={e => this.props.onSave(e)}
            >
              Save
            </Button>
            <Button bsStyle="primary" onClick={() => this.props.onReset()}>
              Reset
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default FormComponent;


