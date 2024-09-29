import React from 'react'
import styled from 'styled-components';
import { Button } from "../styles/Button"
import { NavLink } from "react-router-dom";

const Donation = () => {

  return (
    <Wrappper className="section" >
      <h2 className='common-heading'>Donation</h2>
      <h2>For Donation by Indian Citizens only</h2>
      
      <fieldset>
        <legend>Terms of Donation</legend>
        <ol>
          <li>Please note that only donations towards BAPS Swaminarayan Sanstha, India, are accepted through this page. Contributions for foreign project / citizens / calamities abroad are not accepted.
          </li>
          <li>Donations once made cannot be cancelled nor refunded.
          </li>
          <li>Donation receipts can be downloaded and printed from this website after successful transactions. Receipts cannot be downloaded later.
          </li>
          <li>For any queries please contact on email. </li> 
        </ol>
        </fieldset>
      
    </Wrappper>
  );
};

const Wrappper = styled.section`
  padding: 9rem 2rem;
  background-color:${({ theme }) => theme.colors.bg};
  legend {
    margin-bottom: .5rem;
    font-size: 2rem;
  }
  ol li {
    font-size: 1.5rem;
  }

  @media (max-width:${({ theme }) => theme.media.tab}) {
    
  }

  @media (max-width:${({ theme }) => theme.media.mobile}) {
    
    
  }

`

export default Donation