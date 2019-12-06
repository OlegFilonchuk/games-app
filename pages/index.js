/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Link from 'next/link';
import Layout from '../components/Layout';

const style = css`
  & {
    padding: 2em 0;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 3em 0;
  }
  #join {
    flex-direction: column;
    align-items: flex-start;
  }
  .join-header {
    display: flex;
    font-size: 4em;
    line-height: 1em;
    letter-spacing: 2px;
    flex-direction: column;
  }
  .join-header:after {
    display: block;
    content: '';
    margin-top: 6px;
    height: 5px;
    width: 100%;
    background-color: red;
  }
  .join-wrapper {
    padding: 2em;
    display: flex;
    flex-flow: row wrap;
    align-self: stretch;
    justify-content: space-between;
  }
  .join-wrapper p {
    font-size: 2em;
    padding-bottom: 1em;
  }
  .join-wrapper button {
    align-self: flex-end;
  }
  #news {
    flex-direction: column;
  }
  #news h2 {
    padding: 1.5em 1em;
  }
  .news-content {
    display: flex;
    flex-flow: row wrap;
  }
  .news-image-wrapper {
    flex: 2 1 300px;
    min-height: 300px;
    max-height: 400px;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
  }
  .news-header {
    font-size: 1.5em;
    font-weight: normal;
    color: white;
    background-color: red;
    padding: 0.5em 2em;
  }
  .news-header:hover {
    color: black;
  }
  .news-image {
    flex: 1;
    background-color: #373e49;
  }
  .news-text {
    flex: 1 1 300px;
    padding: 0 1em 1em;
    display: flex;
    flex-direction: column;
  }
  .news-text h4 {
    padding: 1em;
  }
  .news-date {
    margin-top: auto;
    align-self: flex-end;
    font-size: 0.8em;
    font-style: italic;
  }
  #features {
    flex-direction: column;
    align-items: center;
  }
  #features h2 {
    padding: 1.5em 0;
  }
  .features-list {
    display: flex;
    flex-flow: row wrap;
    padding-bottom: 2em;
  }
  .features-list-item {
    flex: 1 1 180px;
    margin: 0 1em;
    display: flex;
    flex-flow: column nowrap;
    padding: 1em 0;
  }
  .features-list-item h5 {
    font-size: 1.3em;
  }
  .features-image {
    height: 200px;
    background-color: #373e49;
  }
  .cta-button {
    padding: 1em;
    border: 1px solid transparent;
    border-radius: 3px;
    color: white;
    background-color: #101317;
    outline: none;
    transition: all 0.1s;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .cta-button:hover {
    color: red;
  }
  .cta-button:focus {
    border: 1px solid red;
  }
  .cta-button:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
  #top {
    flex-direction: column;
  }
  #top h2 {
    padding: 1.5em 0;
  }
  .top-content {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }
  .top-content h3 {
    font-size: 1.5em;
    font-weight: normal;
    color: white;
    background-color: red;
    padding: 0.5em 2em;
  }
  .top-content h3:hover {
    color: black;
  }
  .top-list {
    align-self: stretch;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 2em;
  }
  .top-image {
    height: 200px;
    background-color: #373e49;
  }
`;

const Home = () => (
  <Layout>
    <main css={style}>
      <section id="join">
        <h1 className="join-header">The super fresh game info</h1>

        <div className="join-wrapper">
          <p>Join us to get the latest news</p>

          <button type="button" className="cta-button">
            Get started!
          </button>
        </div>
      </section>

      <section id="news">
        <h2>Keep track of new games</h2>
        <div className="news-content">
          <div className="news-image-wrapper">
            <h3 className="news-header">
              <Link href="/">
                <a>News</a>
              </Link>
            </h3>
            <div className="news-image" />
          </div>

          <div className="news-text">
            <h4>Half-life 3 announced! (no)</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="news-date">11.11.2111</div>
          </div>
        </div>
      </section>

      <section id="features">
        <h2>Create an account and get following features:</h2>

        <ul className="features-list">
          <li className="features-list-item">
            <div className="features-image" />
            <h5>First feature - an amazing feature</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
          <li className="features-list-item">
            <div className="features-image" />
            <h5>Second one - an awesome feature</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
          <li className="features-list-item">
            <div className="features-image" />
            <h5>Third feature - you can always quit</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
        </ul>

        <button type="button" className="cta-button">
          Get started!
        </button>
      </section>

      <section id="top">
        <h2>Keep up to date with most popular games</h2>
        <div className="top-content">
          <h3>
            <Link href="/top">
              <a>Top games</a>
            </Link>
          </h3>
          <ul className="top-list">
            <li className="top-list-item">
              <div className="top-image" />
              <p>top game number 1</p>
            </li>
            <li className="top-list-item">
              <div className="top-image" />
              <p>top game number 3</p>
            </li>
            <li className="top-list-item">
              <div className="top-image" />
              <p>top game number 2</p>
            </li>
            <li className="top-list-item">
              <div className="top-image" />
              <p>top game number 4</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </Layout>
);

export default Home;
