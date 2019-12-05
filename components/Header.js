/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Nav from './nav';

const header = css`
  background-color: darkslategray;
  color: white;
  padding: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <div css={header}>
    <Nav />
  </div>
);

export default Header;
