/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Nav from './nav';

const header = css`
  & {
    background-color: darkslategray;
    color: white;
    padding: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .search-bar {
  }
  .search-bar-input {
    padding: 5px;
    border: none;
    border-radius: 2px;
    outline: 0;
  }
  .search-bar-button {
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 2px;
    color: white;
    background-color: #101317;
    margin-left: 2px;
  }
  .search-bar-button:hover,
  .search-bar-button:focus {
    outline: 1px solid grey;
  }
  .search-bar-button:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const Header = () => (
  <div css={header}>
    <div>logo</div>

    <Nav />

    <div className="search-bar">
      <input type="text" className="search-bar-input" />
      <button type="button" className="search-bar-button">
        Search
      </button>
    </div>
  </div>
);

export default Header;
