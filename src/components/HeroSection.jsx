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
          <p className="hero-top-data">Our Trust</p>
          <h1 className="hero-heading">Kushwah Dharamshala</h1>
          <p className="hero-para">
            Lying in the shadow of mighty Dhauladhar range is the quaint town of
            Dharamshala. Divided in two halves – Kotwali Bazar and the skirting
            markets make up Lower Dharamshala, which makes a dramatic transition
            in the upper reaches that has thick pine, cedar and Himalayan oak
            forests around the township of Mcleodganj.{" "}
          </p>
          <Button className="btn hireme-button">
            <NavLink to="/contact">Contact us</NavLink>
          </Button>
        </div>

        {/* for image */}
        <div className="section-hero-image">
          <Carousel infiniteLoop interval={2000} autoPlay>
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

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.5rem;
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
