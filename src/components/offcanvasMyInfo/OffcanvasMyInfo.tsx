import avatar from 'assets/my_photo.png';
import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

export const OffcanvasMyInfo: FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <Image src={avatar} about={'my photo'} roundedCircle fluid />
        </Col>
        <Col xs={8}>
          <h3>Андрей Ильин</h3>
          <p>Andrei362065@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
};
