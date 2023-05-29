import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';
import { useDebounce } from 'shared/hooks';
import { SortOrder } from 'shared/types.ts';

interface PostsListBarProps {
  sortOrder: SortOrder;
  searchQuery: string;
  changeSortOrder: (order: SortOrder) => void;
  changeSearchQuery: (query: string) => void;
}

export const PostsListBar: FC<PostsListBarProps> = ({ changeSortOrder, sortOrder, changeSearchQuery, searchQuery }) => {
  const handleSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSortOrder(e.target.value as SortOrder);
  };
  const [query, setQuery] = useState(searchQuery);
  const debouncedSearchQuery = useDebounce(query, 500);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    changeSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  return (
    <Container className={'p-o'}>
      <Row className={'gap-3'}>
        <Col xl={4} md={6}>
          <InputGroup>
            <FloatingLabel label={'Search'}>
              <Form.Control onChange={handleChange} value={query} type={'text'} placeholder={'Search'} />
            </FloatingLabel>
            <Button variant={'outline-info'} onClick={() => setQuery('')}>X</Button>
          </InputGroup>
        </Col>
        <Col xl={5} md={6} className={'d-flex align-items-center'}>
          <Row className={'align-items-center'}>
            <Col md={4} className={'pe-0'}>
              <Form.Label className={'fw-bold mb-0'}>
                Sort by:
              </Form.Label>
            </Col>
            <Col md={8}>
              <Form.Select defaultValue={sortOrder} onChange={handleSortOrder} aria-label="Sort oreder selection">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
