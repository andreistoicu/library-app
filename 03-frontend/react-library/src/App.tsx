import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Carousel } from './layouts/Homepage/Carousel';
import { Heros } from './layouts/Homepage/Heros';
import { LibraryService } from './layouts/Homepage/LibraryService';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryService/>
    </div>
  );
}

export default App;
