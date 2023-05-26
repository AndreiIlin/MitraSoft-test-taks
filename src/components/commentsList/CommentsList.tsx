import { CommentCard } from 'components/commentCard';
import { FC, useMemo } from 'react';
import { useAppSelector } from 'shared/hooks';

interface CommentsListProps {
  postId: number;
}

export const CommentsList: FC<CommentsListProps> = ({ postId }) => {
  const comments = useAppSelector(state => state.commentsReducer.comments);
  const currentPostComments = useMemo(() => comments.filter(comment => comment.postId === postId), [comments]);
  return (
    <div className={'d-flex flex-column gap-1'}>
      {currentPostComments.length ? currentPostComments.map(comment => (
        <CommentCard comment={comment} key={comment.id} />
      )) : null}
    </div>
  );
};
