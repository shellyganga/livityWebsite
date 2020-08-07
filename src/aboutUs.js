import React, {Component} from 'react';
import track from './track.png';
import connect from './connect.png';
import support from './support.png';
import orangemascot from './orangemascot.svg';
import bluemascot from './bluemascot.svg';
import greenmascot from './greenmascot.svg';
import redmascot from './redmascot.svg';
import Navbar from './navbar';
import './aboutUs.css';
import Carousel from 'react-bootstrap/Carousel'
class AboutUs extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
        <Navbar />
        <div className="team-container">
        <div className="small-team-container">
        <h1 className="team_header">meet the <b>team</b></h1>
        <p className="team_description">We are a team of four students developing a platform that allow users to share their personal goals and measure their impact on our environment through daily challenges.
        <br />
        <br />


         We are developers and designers from different backgrounds and interests. We developed an application that allow users to share their personal goals and measure their individual environmental impact through a user friendly platform. Livity is currently located at The Cooper Union in Manhattan, New York.</p>
        </div>
        </div>




        <Carousel>

          <Carousel.Item>
            <img
              className="d-block"
              src={greenmascot}
              alt="S slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-h3"><b>ashley fong</b></h3>
              <p className="carousel-paragraph">I am a rising senior from San Francisco, CA. I’m passionate about tech and I plan on majoring in computer science/engineering. I have a lowkey obsession with avocados and dinosaur emojis. In my free time I like to play softball, build robots, and create videos for memories. My biggest goal in life is to make an impact on our world through technology and social good.</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block"
              src={bluemascot}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-h3"><b>jae hyun kim</b></h3>
              <p className="carousel-paragraph">I am a rising senior from New York. I was in charge of overall structure/design and database connection of this project. I love to learn about new things, code different projects, and play video games. I also enjoy learning, exploring, and experimenting on new and interesting subjects. </p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block"
              src={redmascot}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-h3"><b>kristen lee</b></h3>
              <p className="carousel-paragraph">I am a rising junior from New Jersey. I hope to one day visit all of the continents and travel to new places. I am a black belt in karate and I really like to draw in my free time.When I graduate I plan on majoring in STEM subjects.  I love coconuts too! </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block"
              src={orangemascot}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-h3"><b>shelly schwartz</b></h3>
              <p className="carousel-paragraph">Hi, my name is Shelly. I am a senior high school student from New Jersey. I began learning Java in my sophomore year and was instantly mesmerized by the power of codding. Other than studying computer science in my free time, I enjoy writing poetry and going hiking with friends. </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

        <div className="flex-container">
          <div>
            <p className="about-us-subheaders">track</p>
            <img className="track"
              src={track}
            />
            <p className="subheader-description">Start tracking your envionmental contribution!</p>
          </div>
          <div>
            <p className="about-us-subheaders">community  </p>
            <img className="connect"
              src={connect}
            />
            <p className="subheader-description">Compare your contripution and connect with our community!</p>
          </div>
          <div>
            <p className="about-us-subheaders">support</p>
            <img className="support"
              src={support}
            />
            <p className="subheader-description">Support the enviornment by making change with our app!</p>
          </div>
        </div>


        <section className="pink_block">
          <h1 className="our_mission">our <b>mission</b></h1>
          <p className="mission_description">
          We’re all students from different parts of the country who are passionate about computer science and tackling society’s biggest issues through tech. We were told to work with the United Nation SDG’s (Sustainable Development Goals)and create an application that can help tackle the problems. Our platform makes it easier for users to learn about their personal environmental impact and tackle their own personal goals.
<br/><br/><br/><b>Why did you pick these SDG’s?</b><br/><br/>
For our first sustainable development goal, we took inspiration from <b>#11: Sustainable Cities and Communities</b><br/>
Cities are hubs for ideas, commerce, culture, science, productivity, social development and much more. At their best, cities have enabled people to advance socially and economically. With the number of people living within cities projected to rise to 5 billion people by 2030, it’s important that efficient urban planning and management practices are in place to deal with the challenges brought by urbanization.
Rapid urbanization challenges, such as the safe removal and management of solid waste within cities, can be overcome in ways that allow them to continue to thrive and grow, while improving resource use and reducing pollution and poverty. One such example is an increase in municipal waste collection. There needs to be a future in which cities provide opportunities for all, with access to basic services, energy, housing, transportation and more.
<br/><br/>Our second SDG was inspired by <b>#13: Climate Action.</b><br/>
Global warming is causing long-lasting changes to our climate system, which threatens irreversible consequences if we do not act. The annual average economic losses from climate-related disasters are in the hundreds of billions of dollars.

          </p>
        </section>


      </div>

    )
  }
}

export default AboutUs;
