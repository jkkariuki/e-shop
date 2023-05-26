import React, { useState } from "react";
import CartBasket from "./CartBasket";
import DropDown from "./FilterDropDown";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";

function Navigation(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartItems, onAdd, onRemove, onDelete } = props;
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <span id="brand">Jamazon!</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>

              <Button onClick={handleShow}>
                Cart{" "}
                {props.countCartItems ? (
                  <span className="badge badge-light">
                    {props.countCartItems}
                  </span>
                ) : (
                  ""
                )}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartBasket
            onDelete={onDelete}
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
