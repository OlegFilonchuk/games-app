/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Layout from '../components/Layout';

const style = css`
  & {
    background-color: darkgrey;
    width: 900px;
    margin: auto;
    padding: 3em;
  }
  section {
    text-align: center;
    padding: 2em 0;
  }
  #news {
    display: flex;
  }
  .news-image {
    background-color: lightpink;
    min-width: 450px;
  }
  .news-text {
    padding: 0 1em;
  }
  #features h3 {
    padding: 1.5em 0;
  }
  .features-list {
    display: flex;
  }
  .features-list-item {
    margin: 0 1em;
    display: flex;
    flex-flow: column nowrap;
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
    margin-left: 2px;
    transition: all 0.1s;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
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
          <li>
            <div className="features-list-item">
              <div className="image" />
              <h5>first feature - an amazing feature</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </li>
          <li>
            <div className="features-list-item">
              <div className="image" />
              <h5>second one - an awesome feature</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </li>
          <li>
            <div className="features-list-item">
              <div className="image" />
              <h5>third feature - you can always quit</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
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
