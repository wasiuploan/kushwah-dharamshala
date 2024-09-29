import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>

      <footer>
        
        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} . All Rights Reserved.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>

      </footer>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  

  footer {
    background-color: ${({ theme }) => theme.colors.footer_bg};

    p{
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social-icons{
      display: flex;
      gap: 2rem;
  
      div{
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
  
        .icons{
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom-section {  
      hr{
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }

  }

  @media (max-width:${({ theme }) => theme.media.mobile}){

    .footer .footer-bottom-section{
      padding-top: 3.2rem;
    }
  }

`;


export default Footer