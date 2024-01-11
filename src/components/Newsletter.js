import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              
              <p>Joining the team building is a breeze. Navigate your way to <b>Cherengin Hills Convention & Spa Resort</b></p>

            </Col>
            <Col md={6} xl={7}>
            <h3>How to get there?<br></br></h3>
            <div className="address">
                  <p>Pahang</p>
                </div>
            
            
              
                
              
            </Col>
          </Row>
        </div>
      </Col>
  )
}
