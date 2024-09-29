import React from 'react'
import styled from 'styled-components'

const About = () => {



  return (
    <Wrapper>
      <h2 className='common-heading'>About Us</h2>
      <div className="container">
        <p>Lying in the shadow of mighty Dhauladhar range is the quaint town of Dharamshala. Divided in two halves – Kotwali Bazar and the skirting markets make up Lower Dharamshala, which makes a dramatic transition in the upper reaches that has thick pine, cedar and Himalayan oak forests around the township of Mcleodganj. </p>
        <p>It is an 18 km gradual uphill drive from Kangra that gets you to Dharamshala. Mcleodganj serves as the capital of the Tibetan Government in exile. With rising altitude, the summer temperature between Lower and Upper Dharamshala changes from warm to cool climes. </p>
        <p>It was in the wake of the Tibetan uprising of 1959 that His Holiness the 14th Dalai Lama escaped from Lhasa. Choosing Mcleodganj for an abode in exile saw an influx of Tibetan population that followed him into exile. Often referred to as ‘Little Lhasa’ the vivid character of the city today attracts many famous people, including country heads, filmmakers and diplomats to Mcleodganj, Dharamshala from all over the world. </p>
        <p><strong class="black-text">Language:</strong><strong>Hindi, Punjabi, English</strong> are understood and spoken by the people engaged in tourism trade. Natives speak Kangri and Tibetan is spoken by the immigrant Buddhist community.</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container{
    margin-top: 6rem;
    text-align: center;
  }

`;

export default About