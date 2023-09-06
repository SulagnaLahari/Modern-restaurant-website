import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our restaurant is a gastronomic oasis that celebrates the world's diverse culinary traditions. At Gochew Grill, we take pride in curating a menu that showcases an array of international cuisines, from Italian pasta and Japanese sushi to Indian curries and American burgers. Our talented chefs bring their expertise and passion to the kitchen, using only the finest ingredients to craft each dish to perfection. Our modern and inviting ambiance provides the ideal backdrop for a memorable dining experience, whether you're enjoying a romantic dinner, a family gathering, or a casual meal with friends. Join us at Gochew Grill and embark on a culinary journey around the world without leaving your seat. With a commitment to quality and flavor, we're here to satisfy your cravings for global cuisine and create unforgettable dining memories.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded by Sulagna Lahari and Soma Lahari, Gochew Grill was inspired by their passion for travel and their love for international cuisines. In its early days, Gochew Grill was a small, cozy eatery with a modest menu featuring dishes from Italy, India, Thailand, and beyond. The warmth of the staff and the tantalizing aromas drew in curious diners, making it an instant neighborhood favourite. As the years passed, Gochew Grill pushed culinary boundaries, introducing fusion dishes that blended the best of various traditions. Among our cherished dishes are the 'Mango Curry Pizza,' a delightful fusion of Indian and Italian flavors, and the 'Tokyo Tandoori,' a Japanese-inspired take on classic tandoori dishes. Over the years, Gochew Grill has received accolades and praise from both local food critics and international culinary publications.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
