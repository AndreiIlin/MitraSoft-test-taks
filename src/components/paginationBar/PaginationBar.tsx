import { FC, memo } from 'react';
import { Pagination } from 'react-bootstrap';

interface PaginationBarProps {
  count: number;
  activePage: number;
  changePage: (page: number) => void;
}

const PaginationBarWithoutMemo: FC<PaginationBarProps> = ({ count, activePage, changePage }) => {
  const cells = Array.from({ length: Math.ceil(count / 10) }, (_, index) => index + 1);
  return (
    <div className={'mt-3'}>
      <Pagination>
        {cells.map(cell => (
          <Pagination.Item
            key={cell}
            active={cell === activePage}
            onClick={() => changePage(cell)}
          >{cell}</Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export const PaginationBar = memo(PaginationBarWithoutMemo)
