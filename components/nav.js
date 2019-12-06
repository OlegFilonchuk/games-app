/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const nav = css`
  .nav-list {
    display: flex;
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
  .nav-list-item {
    position: relative;
    display: flex;
  }
  .nav-list-item:after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: red;
  }
  .nav-list-item:last-child:after {
    content: none;
  }
  .nav-list-item:hover {
    color: red;
  }
  .nav-list-item:hover:before {
    position: absolute;
    top: calc(100% - 5px);
    left: 0;
    content: '';
    width: 100%;
    height: 5px;
    background-color: red;
  }
  .nav-link {
    color: inherit;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    display: block;
    border-radius: 3px;
    transition: background-color 0.1s;
  }
`;

const Nav = () => (
  <nav css={nav}>
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </li>
      <li className="nav-list-item">
        <Link href="/top">
          <a className="nav-link">Top games</a>
        </Link>
      </li>
      <li className="nav-list-item">
        <Link href="/">
          <a className="nav-link">New games</a>
        </Link>
      </li>
      <li className="nav-list-item">
        <Link href="/">
          <a className="nav-link">Coming</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
