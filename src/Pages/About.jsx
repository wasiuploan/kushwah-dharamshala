import React from 'react'
import styled from 'styled-components'

const About = () => {



  return (
    <Wrapper>
      <h2 className='common-heading'>About Us</h2>
      <div className="container">
        <p>कुशवाहा धर्मशाला is a beacon of hope and a testament to the power of collective goodwill. Established with the vision of uplifting the underserved, our trust is dedicated to creating opportunities, nurturing potential, and building a supportive community for those in need.</p>
        <h2 className='sub-heading'>Our Mission</h2>
        <p>To empower individuals through education, social welfare, and community support, ensuring a brighter and more inclusive future for all.</p>
        <h2 className='sub-heading'>Our Vision</h2>
        <p>To create a society where every individual, regardless of their background, has access to essential resources, opportunities, and a dignified life.</p>
        <h2 className='sub-heading'>Our Journey</h2>
        <p>Founded by a group of compassionate individuals driven by the desire to make a difference, कुशवाहा धर्मशाला has grown into a trusted organization dedicated to service. From humble beginnings, our initiatives have expanded to touch the lives of countless individuals, offering hope and fostering resilience.</p>
        <h2 className='sub-heading'>What We Do</h2>
        <ol>
          <li><p><strong>Education for All:</strong> We run a school that provides quality education to children from underprivileged communities, aiming to break the cycle of poverty through knowledge and skill-building.</p></li>
          <li><p><strong>Social Welfare Programs:</strong> Our diverse range of initiatives includes healthcare camps, food distribution, and empowerment programs tailored to uplift marginalized groups.</p></li>
          <li><p><strong>Community Services:</strong> Our Dharamshala offers a safe haven and support for those in need, fostering a sense of belonging and security.</p></li>
        </ol>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  

  .container{
    margin-top: 6rem;
    text-align: left;

    .sub-heading {
      font-size: 2rem;
      font-weight: 500;
      text-align: left;
    }
    p {
      text-align: left;
      margin-bottom: 1.5rem;
    }
    li {
      margin-left: 2rem;
    }
    li::marker {
      font-size: 2rem;
    }
  }

`;

export default About