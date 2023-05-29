import avatar from 'assets/avatar-placeholder.png';
import { UserInfoBlock } from 'components/userInfoBlock';
import { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { IUser } from 'shared/types.ts';

interface UserInfoProps {
  user: IUser | null;
}

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div className={'d-flex flex-column gap-3 mt-3'}>
      <Row>
        <Col xl={4} xs={12}>
            <Image src={avatar} fluid />
        </Col>
        <Col xl={8} xs={12}>
          <UserInfoBlock>
            <h2 className={'fs-2'}>{user.name} ({user.username})</h2>
            <p className={'fs-5'}>{user.address.city}, {user.address.street}, {user.address.suite}</p>
          </UserInfoBlock>
          <UserInfoBlock>
            <p><b>Company:</b> {user.company.name}</p>
            <p><b>Business services:</b> {user.company.bs}</p>
            <p><b>Catch phrase:</b> {user.company.catchPhrase}</p>
          </UserInfoBlock>
          <UserInfoBlock>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
          </UserInfoBlock>
        </Col>
      </Row>
    </div>
  );
};
