import { changeIdForCommentsFetching, changePostsPage, fetchComments, setCurrentUserId } from 'app/store';
import { PostsList } from 'components/postsList/PostsList.tsx';
import { UserInfo } from 'components/userInfo';
import { FC, useCallback, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { pathRoutes } from 'shared/routes.ts';

export const UserInfoPage: FC = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.usersReducer.user);
  const posts = useAppSelector(state => state.postsReducer.posts);
  const postIdForCommentsFetching = useAppSelector(state => state.commentsReducer.postIdForFetch);
  const postsStatus = useAppSelector(state => state.postsReducer.status);

  const callbacks = {
    handleChangeActivePage: useCallback((number: number) => dispatch(changePostsPage(number)), []),
    changeIdForCommentsFetching: useCallback((id: number) => dispatch(changeIdForCommentsFetching(id)), []),
    fetchComments: useCallback(() => dispatch(fetchComments()), []),
  };

  useEffect(() => {
    if (userId) {
      dispatch(setCurrentUserId(+userId));
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={5}>
          <Button
            as={Link}
            to={pathRoutes.main()}
            className={'mt-3'}
            variant={'outline-primary'}
          >Back to main page</Button>
          <UserInfo user={user} />
        </Col>
        <Col xs={7}>
          <PostsList
            posts={posts} postsStatus={postsStatus} postIdForCommentsFetching={postIdForCommentsFetching}
            fetchComments={callbacks.fetchComments} changeIdForCommentsFetching={callbacks.changeIdForCommentsFetching}
          />
        </Col>
      </Row>
    </Container>
  );
};
