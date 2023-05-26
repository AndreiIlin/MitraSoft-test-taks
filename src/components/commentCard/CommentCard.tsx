import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IComment } from 'shared/types.ts';

interface CommentCardProps {
  comment: IComment;
}

export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {comment.email}
        </Card.Title>
        <Card.Text>
          {comment.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
