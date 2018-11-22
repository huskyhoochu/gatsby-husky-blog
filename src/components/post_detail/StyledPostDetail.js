import styled from 'styled-components';

const Content = styled.article`
  margin: 1rem;
  line-height: 1.75;
  text-indent: 1rem;
  font-size: 1.2rem;
  word-break: normal;
  word-wrap: break-word;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-indent: 0;
  }

  a {
    font-weight: 600;
    color: rebeccapurple !important;

    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    margin: 2rem 0;
  }

  pre {
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }

  pre,
  code {
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
    text-indent: 0;
  }

  blockquote {
    border-left: 0.4rem solid lightgray;
    margin: 1rem 1rem 1rem 0;
    padding: 0.4rem 0.8rem;
    font-size: 1.1rem;

    p {
      margin: 0.5rem 0;
    }
  }

  .table-wrapper {
    overflow-x: auto;
  }

  table {
    text-indent: 0;
  }

  thead {
    background-color: lavenderblush;

    th {
      padding: 0.5rem 0.5rem 0 0.5rem;
      min-width: 10rem;
    }
  }

  td {
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    min-width: 10rem;

    &:nth-last-child(1) {
      padding-right: 0;
    }
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 414px) {
    font-size: 1rem;

    blockquote {
      margin-left: 0;
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
    }
  }

  .caption {
    text-align: center;
    color: dimgrey;
    font-size: 1rem;
    text-indent: 0;
  }

  .external-img {
    display: block;
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: 1rem auto;
  }

  .iframe-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }

  .iframe-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default {
  Content,
};
