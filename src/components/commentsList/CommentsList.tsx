import { CommentCard } from 'components/commentCard';
import { FC, useMemo } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAppSelector } from 'shared/hooks';

interface CommentsListProps {
  postId: number;
}

export const CommentsList: FC<CommentsListProps> = ({ postId }) => {
  const comments = useAppSelector(state => state.commentsReducer.comments);
  const currentPostComments = useMemo(() => comments.filter(comment => comment.postId === postId), [comments]);
  const commentsStatus = useAppSelector(state => state.commentsReducer.status);
  return (
    <div className={'d-flex flex-column gap-1'}>
      {commentsStatus === 'loading' && !currentPostComments.length &&
        <Spinner variant={'info'} role={'status'} style={{ width: '4rem', height: '4rem' }} />}
      {currentPostComments.length ? currentPostComments.map(comment => (
        <CommentCard comment={comment} key={comment.id} />
      )) : null}
      {commentsStatus === 'error' && !currentPostComments.length && <h2 className={'fs-4'}>Oops, something goes wrong! Try again later...</h2>}
    </div>
  );
};
