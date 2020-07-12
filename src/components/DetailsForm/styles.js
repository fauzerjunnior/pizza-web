import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #333;
  font-size: 16px; 
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  & svg {
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  margin:  61px 0 32px;
  font-size: 32px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;