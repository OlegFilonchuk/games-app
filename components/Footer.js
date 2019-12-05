/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const footer = css`
  & {
    color: white;
    background-color: darkslategray;
    padding: 2em;
    width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
  }
  .links-list {
    display: flex;
  }
  .links-list li {
    margin: 0 10px;
  }
  .footer-link {
    text-transform: lowercase;
    font-size: 0.8em;
    display: block;
  }
  .footer-link:hover,
  .footer-link:focus {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <footer css={footer}>
    <div>logo</div>
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
    <div />
  </footer>
);

export default Footer;
