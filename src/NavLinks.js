import React from 'react';

class NavLinks extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a href="/Galery">Galery</a>
        </li>
        <li>
          <a>Imprint</a>
        </li>
        <li>
          <a>Privacy</a>
        </li>
      </ul>
    );
  }
}

export default NavLinks;