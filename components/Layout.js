/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const bp = [576, 768, 992, 1200];
const mq = bp.map((item) => `@media (min-width: ${item}px)`);
const reset = css`
  /* Указываем box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Убираем внешние отступы */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  /* Выставляем основные настройки по-умолчанию для body */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: 'Roboto', sans-serif;
  }
  /* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }
  /* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
  a,
  a:hover,
  a:visited,
  a:focus,
  a:active {
    color: inherit;
    text-decoration: none;
  }
  /* Упрощаем работу с изображениями */
  img {
    max-width: 100%;
    display: block;
  }
  button {
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  /* Указываем понятную периодичность в потоке данных у article*/
  article > * + * {
    margin-top: 1em;
  }
  /* Наследуем шрифты для инпутов и кнопок */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

const container = css`
  & {
    padding: 3em 3em 0;
    margin: auto;
    background-color: lightgrey;
  }
  @media (max-width: ${bp[0]}px) {
    padding: 5px;
    width: 100%;
  }
  ${mq[0]} {
    width: ${bp[0]}px;
  }
  ${mq[1]} {
    width: ${bp[1]}px;
  }
  ${mq[2]} {
    width: ${bp[2]}px;
  }
  ${mq[3]} {
    width: ${bp[3]}px;
  }
`;

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>NextJS-App</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <Global styles={reset} />
    <Header />
    <div css={container}>{children}</div>
    <Footer layout={container} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
