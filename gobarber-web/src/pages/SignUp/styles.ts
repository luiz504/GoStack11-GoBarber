import styled from 'styled-components';
import { shade } from 'polished';
import { Form as FormUnform } from '@unform/web';

import SignUpBGImg from '../../assets/sign-up-background.png';

export const WrapperSignIn = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  > a {
    display: flex;
    align-items: center;
    margin-top: 24px;

    color: #f4efe8;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4efe8')};
    }

    > svg {
      margin-right: 16px;
    }
  }
`;

export const BackGround = styled.div`
  flex: 1;
  background: url(${SignUpBGImg}) no-repeat center;
  background-size: cover;
`;

export const Form = styled(FormUnform)`
  margin: 80px 0;
  width: 340px;
  text-align: center;

  > h1 {
    margin-bottom: 24px;
  }

  > a {
    display: block;
    margin-top: 24px;

    color: #f4efe8;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4efe8')};
    }
  }
`;
