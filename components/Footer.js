/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const footer = css`
  & {
    color: white;
    background-color: #373e49;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
  .logo {
    width: 100px;
    height: 100px;
    background-color: lightpink;
    line-height: 100px;
    text-align: center;
  }
  .links-list {
    display: flex;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .links-list li {
    margin: 0 10px;
  }
  .footer-link {
    text-transform: lowercase;
    font-size: 0.8em;
    display: block;
    padding: 0.5em 0;
  }
  .footer-link:hover,
  .footer-link:focus {
    text-decoration: underline;
  }
  .logo,
  .placeholder {
    @media (max-width: 576px) {
      display: none;
    }
  }
`;

const Footer = () => (
  <footer css={footer}>
    <div className="logo">logo</div>
    <ul className="links-list">
      <li>
        <Link href="/">
          <a className="footer-link">About us</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="footer-link">Privacy policy</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="footer-link">Contacts</a>
        </Link>
      </li>
    </ul>
    <div className="placeholder" />
  </footer>
);

export default Footer;
