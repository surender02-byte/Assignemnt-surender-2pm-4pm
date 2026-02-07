import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Save submitted data
    setSubmittedData(formData);

    // 2️⃣ Clear form
    setFormData({
      name: "",
      email: ""
    });
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4 text-center">User Form</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Button type="submit" className="w-100">
          Submit
        </Button>
      </Form>

      {/* Show submitted data */}
      {submittedData && (
        <Card className="mt-4">
          <Card.Body>
            <h5>Submitted Data</h5>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default App;
