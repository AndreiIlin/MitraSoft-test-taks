import { FC, PropsWithChildren } from 'react';

export const UserInfoBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'d-flex flex-column p-2 border-bottom'}>
      {children}
    </div>
  );
};
