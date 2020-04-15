import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Ivan L. Seibel</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Ivan L. Seibel"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
