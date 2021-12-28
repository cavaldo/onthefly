import React from 'react';

function Nav(props) {
    const sectionLinks = [];

    for (const value of Object.values(props.sections)){
      console.log(value);
      sectionLinks.push(<a href={"#" + value}>{value}</a>);
    }

    return (
      <nav>
        {sectionLinks}
      </nav>
    );
  }
  
  export default Nav;