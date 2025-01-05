import React, { useState } from 'react';
import styles from './CSS/SlideShow.module.css'
import classNames from 'classnames';
//import { ArrowLeftO, ArrowRightO } from 'css.gg';
import circle from '../icons/circle-solid.svg'
import { projectImages } from '../images';


const SlideShow = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hideBubbles, setHideBubbles] = useState(styles.hidden);
  const [active, setActive] = useState("")

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
    // bubbleFlicker();
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    // bubbleFlicker();
  };

  const bubbleFlicker = () => {
    setInterval(() => {
      setHideBubbles(styles.hidden)
    }, 500);

    setInterval(() => {
      setHideBubbles("")
    }, 500);
  }

  function goToSlide(slide){
    setCurrentIndex(slide)
  }

  return (
    <div className={styles.slideshow_container}>
      <div className={classNames(styles.navbtn, styles.left)} onClick={goToPrevSlide}
      onMouseEnter={() => setHideBubbles("")}
      onMouseLeave={() => setHideBubbles(styles.hidden)}>
        <div className={styles.icon}/>
      </div>
      {slides.map((slide, index) => (
        <div className={classNames(styles.slide, `${index === currentIndex ? styles.active : ''}`)}
          onMouseEnter={() => setHideBubbles("")}
          onMouseLeave={() => setHideBubbles(styles.hidden)}
          key={index} style={{ backgroundImage: `url(${projectImages[slide]})` }}>

          <div className={classNames(hideBubbles, styles.bubbles_container)}>
            {slides.map((key, index) => (
              <img className={classNames(styles.bubble, `${index === currentIndex ? styles.active_ : ''}`)}
              key={key} src={circle}/>
            ))}
          </div>
        </div>
      ))}
      <div className={classNames(styles.navbtn, styles.right)} onClick={goToNextSlide}
      onMouseEnter={() => setHideBubbles("")}
      onMouseLeave={() => setHideBubbles(styles.hidden)}>
        <div className={styles.icon}/>
      </div>
    </div>
  );
}

export default SlideShow;