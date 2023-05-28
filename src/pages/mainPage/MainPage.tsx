import { changeIdForCommentsFetching, changePostsPage, fetchAllPosts, fetchComments } from 'app/store';
import { PaginationBar } from 'components/paginationBar';
import { PostsList } from 'components/postsList/PostsList.tsx';
import { FC, useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

const PAGES_COUNT = 100; // TODO Найти как в JsonPlaceholder получить общее количество постов

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.postsReducer.currentPage);
  const postsStatus = useAppSelector(state => state.postsReducer.status);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [currentPage]);
  const posts = useAppSelector(state => state.postsReducer.posts);
  const postIdForCommentsFetching = useAppSelector(state => state.commentsReducer.postIdForFetch);

  const callbacks = {
    handleChangeActivePage: useCallback((number: number) => dispatch(changePostsPage(number)), []),
    changeIdForCommentsFetching: useCallback((id: number) => dispatch(changeIdForCommentsFetching(id)), []),
    fetchComments: useCallback(() => dispatch(fetchComments()), []),
  };


  return (
    <Container>
      <PostsList
        posts={posts} postsStatus={postsStatus} postIdForCommentsFetching={postIdForCommentsFetching}
        fetchComments={callbacks.fetchComments} changeIdForCommentsFetching={callbacks.changeIdForCommentsFetching}
      />
      {posts.length && postsStatus === 'success' ? (
        <PaginationBar activePage={currentPage} count={PAGES_COUNT} changePage={callbacks.handleChangeActivePage} />
      ) : null}
    </Container>
  );
};


