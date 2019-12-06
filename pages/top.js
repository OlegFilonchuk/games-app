/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';

const top = css`
  & {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1em;
  }
  .item {
    background-color: yellow;
    padding: 10px;
    text-align: center;
  }
`;

const Top = () => (
  <Layout>
    <main css={top}>top games</main>
  </Layout>
);

export default Top;
