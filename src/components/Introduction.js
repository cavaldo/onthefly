import React from 'react';
import Data from '../data.json';
import '../assets/styles/components/Introduction.scss';

function Introduction() {
    return (
      <header className="introduction">
        <h1 className="introduction-name">{Data.introduction.lastname} {Data.introduction.firstname}</h1>
        <h2 className="introduction-short">{Data.introduction.short}</h2>
      </header>
    );
  }
  
  export default Introduction;
  