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
    margin: 0 5px;
  }
  .nav-link {
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    display: block;
    border-radius: 3px;
    transition: background-color 0.1s;
  }
  .nav-link:hover {
    background-color: white;
    color: #2f3f4f;
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
