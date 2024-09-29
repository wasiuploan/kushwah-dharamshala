import React from 'react'
import styled from 'styled-components'

const Contact = () => {

  return (
    <Wrapper>
      <h2 className='common-heading'>Feel free to Contact Us</h2>
      <h3 className='common-sub-heading'>Mob: +91-9199420697</h3>
      <h3 className='common-sub-heading'>Email: kushwah.dhramsalah@gmail.com</h3>
      <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.272003841331!2d74.18699649999998!3d17.308986000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1826400000001%3A0x34bdd98ca25093e3!2sGovernment%20College%20of%20Engineering%2C%20Karad!5e0!3m2!1sen!2sin!4v1659791986349!5m2!1sen!2sin" width="90%" height="450" style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 5rem;
  .map-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .common-heading {
      font-size: 3rem;
    }
  }

`;

export default Contact