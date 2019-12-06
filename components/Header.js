/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Nav from './nav';

const header = css`
  & {
    background-color: darkslategray;
    color: white;
    padding: 1em;
    display: flex;
    flex-flow: row nowrap;
    @media (max-width: 576px) {
      flex-direction: column;
    }
    justify-content: space-evenly;
    align-items: center;
  }
  .search-bar {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .search-bar-input {
    background-color: rgb(255, 255, 255);
    padding: 5px;
    border: none;
    border-radius: 3px;
    outline: 0;
  }
  .search-bar-button {
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 3px;
    color: white;
    background-color: #101317;
    outline: none;
    margin-left: 2px;
  }
  .search-bar-button:hover,
  .search-bar-button:focus {
    border: 1px solid grey;
  }
  .search-bar-button:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const Header = () => (
  <header css={header}>
    <div>logo</div>

    <Nav />

    <div className="search-bar">
      <input type="text" className="search-bar-input" placeholder="Search" />
      <button type="button" className="search-bar-button">
        Search
      </button>
    </div>
  </header>
);

export default Header;
