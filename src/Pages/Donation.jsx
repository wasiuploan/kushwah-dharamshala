import React from 'react'
import styled from 'styled-components';
import { Button } from "../styles/Button"
import { NavLink } from "react-router-dom";

const Donation = () => {

  return (
    <Wrappper className="section" >
      <div className='account-details'>
        <h2 className='common-heading'>Support Our Mission: Donate Today</h2>
        <p>Your donation helps provide education to children, support families, and uplift communities. Join us in making a difference and creating a better future. Donate now.</p>
     
        <h2 className='sub-heading'>Account details for donation</h2>
        <p><strong>Bank Name: </strong> State Bank of India</p>
        <p><strong>Name: </strong> BUDHHA SEWA SADAN</p>
        <p><strong>Account No.: </strong> 37179791629</p>
        <p><strong>IFSC Code: </strong> SBIN0011813</p>
      </div>
      <div className='form-10ac'></div>
     
      
    </Wrappper>
  );
};

const Wrappper = styled.section`
  padding: 9rem 2rem;
  background-color:${({ theme }) => theme.colors.bg};
  .common-heading {
    margin-bottom: 1rem;
  }
  .account-details {
    width: 50%;
    margin: 0 auto;
    h2 {
      text-align: left;
    }
    .sub-heading {
      font-weight: 600;
      font-size: 3rem;
      margin-top: 1rem;
    }
  }

  @media (max-width:${({ theme }) => theme.media.tab}) {
    
  }

  @media (max-width:${({ theme }) => theme.media.mobile}) {
    
    .account-details {
      width: 100%;
    }
  }

`

export default Donation