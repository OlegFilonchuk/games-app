/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import PropTypes from 'prop-types';

const footer = css`
  & {
    color: white;
    background-color: darkslategray;
    padding: 2em;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 576px) {
      flex-direction: column;
    }
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

const Footer = ({ layout }) => (
  <footer css={[layout, footer]}>
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

Footer.propTypes = {
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Footer;
