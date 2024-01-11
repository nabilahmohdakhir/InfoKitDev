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
            
            <Col md={6} xl={12}>
            <h3>NAK BUANGGGGG <br></br></h3>
            <div className="address">
                  <p>Alright, so here's the lowdown: You're the boss of your roommate situation! Feelin' like you want a partner in crime? Go ahead and pick your roomie.</p>
                   <p>But hey, if you're riding solo and thinking, "Who's gonna be my bunkmate?" – no sweat! Just shoot a message to the committee, and they'll play matchmaker for you. Easy-peasy, right? 🤜🤛</p>
                </div>
            
            
              
                
              
            </Col>
          </Row>
        </div>
      </Col>
  )
}
