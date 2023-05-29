import {
  changeIdForCommentsFetching,
  changePostsPage,
  changeSearchQuery,
  changeSortOrder, clearSearchQuery,
  fetchAllPosts,
  fetchComments,
} from 'app/store';
import { PaginationBar } from 'components/paginationBar';
import { PostsList } from 'components/postsList/PostsList.tsx';
import { FC, useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { SortOrder } from 'shared/types.ts';

const PAGES_COUNT = 100; // TODO Найти как в JsonPlaceholder получить общее количество постов

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.postsReducer.currentPage);
  const postsStatus = useAppSelector(state => state.postsReducer.status);
  const sortOrder = useAppSelector(state => state.postsReducer.sortOrder);
  const searchQuery = useAppSelector(state => state.postsReducer.searchQuery);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [currentPage, sortOrder, searchQuery]);
  const posts = useAppSelector(state => state.postsReducer.posts);
  const postIdForCommentsFetching = useAppSelector(state => state.commentsReducer.postIdForFetch);

  const callbacks = {
    handleChangeActivePage: useCallback((number: number) => dispatch(changePostsPage(number)), []),
    changeIdForCommentsFetching: useCallback((id: number) => dispatch(changeIdForCommentsFetching(id)), []),
    fetchComments: useCallback(() => dispatch(fetchComments()), []),
    changeSortOrder: useCallback((order: SortOrder) => dispatch(changeSortOrder(order)), []),
    changeSearchQuery: useCallback((query: string) => dispatch(changeSearchQuery(query)), []),
    clearSearchQuery: useCallback(() => dispatch(clearSearchQuery()), []),
  };


  return (
    <Container>
      <PostsList
        posts={posts} postsStatus={postsStatus} postIdForCommentsFetching={postIdForCommentsFetching}
        fetchComments={callbacks.fetchComments} changeIdForCommentsFetching={callbacks.changeIdForCommentsFetching}
        changeSearchQuery={callbacks.changeSearchQuery} changeSortOrder={callbacks.changeSortOrder}
        searchQuery={searchQuery}
        sortOrder={sortOrder}
        clearSearchQuery={callbacks.clearSearchQuery}
      />
      {posts.length && postsStatus === 'success' ? (
        <PaginationBar activePage={currentPage} count={PAGES_COUNT} changePage={callbacks.handleChangeActivePage} />
      ) : null}
    </Container>
  );
};


