import avatar from 'assets/my_photo_medium.png';
import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

export const AboutMe: FC = () => {
  return (
    <Container className={'pt-5'}>
      <Row>
        <Col xs={4}>
          <Image fluid src={avatar} />
        </Col>
        <Col xs={8}>
          <h2>Меня зовут Андрей, я начинающий Frontend-разработчик.</h2>
          <p className={'mt-5'}>Я начал заниматься программированием около 1,5 лет назад. Я закончил 10-ти месячные курсы Hexlet по
            направлению Frontend-разработки, успел поучаствовать в open source проектах, написать несколько пет-проектов
            и тестовых заданий. Также я имел опыт буткемп-стажировки в московской IT компании Red Mad Robot, за время
            которой получил опыт командной разработки проектов с нуля. В данный момент нахожусь в поиске работы.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
