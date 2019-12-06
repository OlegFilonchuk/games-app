/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Layout from '../components/Layout';

const style = css`
  & {
    padding: 2em 0;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    padding: 2em 0;
  }
  .news-image {
    flex: 2 1 300px;
    background-color: lightpink;
    min-height: 300px;
    max-height: 400px;
    padding-bottom: 1em;
  }
  .news-text {
    flex: 1 1 300px;
    padding: 0 1em 1em;
  }
  .news-text h3 {
    padding: 1em;
  }
  #features {
    flex-direction: column;
    align-items: center;
  }
  #features h3 {
    padding: 1.5em 0;
  }
  .features-list {
    display: flex;
    flex-flow: row wrap;
  }
  .features-list-item {
    flex: 1 1 180px;
    margin: 0 1em;
    display: flex;
    flex-flow: column nowrap;
    padding: 1em 0;
  }
  .image {
    height: 200px;
    background-color: pink;
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
    margin: auto;
  }
  .cta-button:hover {
    color: #101317;
    background-color: white;
  }
  .cta-button:focus {
    border: 1px solid grey;
  }
  .cta-button:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const Home = () => (
  <Layout>
    <main css={style}>
      <section id="news">
        <div className="news-image" />
        <div className="news-text">
          <h3>Half-life 3 announced! (no)</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>

      <section id="features">
        <h3>Create an account and get following features:</h3>

        <ul className="features-list">
          <li className="features-list-item">
            <div className="image" />
            <h5>first feature - an amazing feature</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
          <li className="features-list-item">
            <div className="image" />
            <h5>second one - an awesome feature</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
          <li className="features-list-item">
            <div className="image" />
            <h5>third feature - you can always quit</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
        </ul>
      </section>

      <section id="cta">
        <button type="button" className="cta-button">
          Get started!
        </button>
      </section>
    </main>
  </Layout>
);

export default Home;
