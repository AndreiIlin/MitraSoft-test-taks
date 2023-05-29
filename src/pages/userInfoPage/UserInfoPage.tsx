import {
  changeIdForCommentsFetching,
  changePostsPage,
  changeSearchQuery,
  changeSortOrder,
  clearSearchQuery,
  fetchComments,
  setCurrentUserId,
} from 'app/store';
import { PostsList } from 'components/postsList/PostsList.tsx';
import { UserInfo } from 'components/userInfo';
import { FC, useCallback, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { pathRoutes } from 'shared/routes.ts';
import { SortOrder } from 'shared/types';

export const UserInfoPage: FC = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.usersReducer.user);
  const posts = useAppSelector(state => state.postsReducer.posts);
  const postIdForCommentsFetching = useAppSelector(state => state.commentsReducer.postIdForFetch);
  const postsStatus = useAppSelector(state => state.postsReducer.status);
  const sortOrder = useAppSelector(state => state.postsReducer.sortOrder);
  const searchQuery = useAppSelector(state => state.postsReducer.searchQuery);

  const callbacks = {
    handleChangeActivePage: useCallback((number: number) => dispatch(changePostsPage(number)), []),
    changeIdForCommentsFetching: useCallback((id: number) => dispatch(changeIdForCommentsFetching(id)), []),
    fetchComments: useCallback(() => dispatch(fetchComments()), []),
    changeSortOrder: useCallback((order: SortOrder) => dispatch(changeSortOrder(order)), []),
    changeSearchQuery: useCallback((query: string) => dispatch(changeSearchQuery(query)), []),
    clearSearchQuery: useCallback(() => dispatch(clearSearchQuery()), []),
  };

  useEffect(() => {
    if (userId) {
      dispatch(setCurrentUserId(+userId));
    }
  }, [sortOrder, searchQuery]);

  return (
    <Container>
      <Row>
        <Col xl={5} md={3}>
          <Link
            to={pathRoutes.main()}
            onClick={callbacks.clearSearchQuery}
            className={'mt-3 btn btn-outline-primary'}
          >
            Back to main page
          </Link>
          <UserInfo user={user} />
        </Col>
        <Col xl={7} md={9}>
          <PostsList
            posts={posts} postsStatus={postsStatus} postIdForCommentsFetching={postIdForCommentsFetching}
            fetchComments={callbacks.fetchComments} changeIdForCommentsFetching={callbacks.changeIdForCommentsFetching}
            changeSearchQuery={callbacks.changeSearchQuery} changeSortOrder={callbacks.changeSortOrder}
            searchQuery={searchQuery} sortOrder={sortOrder}
            clearSearchQuery={callbacks.clearSearchQuery}
          />
        </Col>
      </Row>
    </Container>
  );
};
