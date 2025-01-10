import React from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//Importing Button
import { Button } from "../styles/Button";

const HeroSection = () => {

  return (
    <Wrapper>
      <div className="container">
        <div className="section-hero-data">
          <h1 className="heading">Welcome to बुद्ध सेवा सदन</h1>
          <h2 className="sub-heading">कुशवाहा धर्मशाला बासुकीनाथ, झारखंड।</h2>
          <p className="hero-para">
            Welcome to कुशवाहा धर्मशाला Empowering Lives, 
            Enriching Communities At कुशवाहा धर्मशाला, 
            we are dedicated to making a meaningful difference in the lives of the underprivileged. 
            Our mission is driven by compassion, service, and a commitment to fostering a brighter future for all. 
            As a community-centered trust, we channel our efforts into three key areas:
          </p>
          <h2 className="sub-heading">Education for Every Child</h2>
          <p className="hero-para">
            We believe that education is the cornerstone of empowerment. 
            Through our school initiatives, we provide quality education to children from economically disadvantaged backgrounds. 
            Our aim is to nurture young minds, equip them with essential skills, and pave the way for a prosperous future.
          </p>
          <h2 className="sub-heading">Social Welfare Initiatives</h2>
          <p className="hero-para">
            Beyond education, our trust actively engages in social work to uplift communities. 
            Whether it’s providing food and shelter, organizing health camps, or supporting women’s empowerment, 
            we strive to address the needs of the underserved and promote holistic well-being.
          </p>
          <h2 className="sub-heading">Community Support</h2>
          <p className="hero-para">
            कुशवाहा धर्मशाला serves as a haven for individuals and families in need. 
            Our facility provides a safe and welcoming space for people seeking assistance, 
            whether it's temporary lodging or guidance for a better tomorrow.
          </p>
          <h2 className="sub-heading">Join Us in Our Mission</h2>
          <p className="hero-para">
            We invite you to be a part of our journey towards creating a society where no one is left behind. 
            Together, we can amplify the impact of our efforts and bring hope to those who need it the most.
            Contact us to learn more about our programs, volunteer opportunities, and ways you can contribute to our cause.
          </p>
          <Button className="btn hireme-button">
            <NavLink to="/contact">Contact us</NavLink>
          </Button>
        </div>

        {/* for image */}
        <div className="section-hero-image">
          <Carousel infiniteLoop interval={2000}   className="custom-carousel">
            <div>
              <img src="./images/kush-1.jpeg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="./images/kush-2.jpeg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="./images/kush-3.jpeg" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="./images/kush-4.jpeg" />
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <img src="./images/kush-5.jpeg" />
              <p className="legend">Legend 5</p>
            </div>

            <div>
              <img src="./images/kush-6.jpeg" />
              <p className="legend">Legend 6</p>
            </div>
            <div>
              <img src="./images/kush-7.jpeg" />
              <p className="legend">Legend 7</p>
            </div>
            <div>
              <img src="./images/kush-8.jpeg" />
              <p className="legend">Legend 8</p>
            </div>
            <div>
              <img src="./images/kush-9.jpeg" />
              <p className="legend">Legend 9</p>
            </div>
            <div>
              <img src="./images/kush-10.jpeg" />
              <p className="legend">Legend 10</p>
            </div>
            <div>
              <img src="./images/kush-11.jpeg" />
              <p className="legend">Legend 11</p>
            </div>

          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    display: flex;
    gap: 20px;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .heading {
    text-align: left;
  }
  .sub-heading {
    font-size: 2rem;
    text-align: left;
    font-weight: 500;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    width: 95%;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    .carousel-root {
        width: 100%;
    }
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 70%;
  }

  .hireme-button {
    color: #fff;
  }
  /* .custom-carousel {
    .slider {
      .slide {
        img {
          max-width: 350px;
          min-height: 120px;
        }
      }
    }
  } */

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
        flex-direction: column;
    }
    .hero-heading {
      font-size: 5rem;
    }
    .section-hero-image {
        width: 350px;
    }
  }
`;

export default HeroSection;
