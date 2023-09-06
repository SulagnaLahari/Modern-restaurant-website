import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Modern twists on classic dishes" />
      <h1 className="app__header-h1">Hundreds of flavours under one roof</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>&quot;Welcome to Gochew Grill, a culinary haven where flavors come to life and memories are made. Nestled in the heart of Kolkata, our restaurant is a destination for those seeking exceptional dining experiences.&quot; </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
