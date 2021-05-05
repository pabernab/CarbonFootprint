import React from "react";
import Page from "./Page";

export default function PageThree(props) {
  return (
    <Page color="#1d2124" background="#f8f9fa">
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <h1>About</h1>

<p>

Here are some brief explanations of the equations we used for the calculator. For a full explanation along with assumptions made about the user, the excel sheet can be downloaded <a href = '../../public/GHGCalculator.xls'>here.</a>

<br></br>
<br></br>



  Basic vehicle CO2 emissions -  
   
  - 219 miles/week is the average national consumption per US vehicle 
  Emissions = ( [Number of miles driven per week for vehicle #1] * [52 weeks in a year] ) / 
  ( [vehicle #1 avg household fuel efficiency] * [lbs of CO2 emitted per gallon] * 
  [emission of greenhouse gases other than CO2] )

  - can multiply by 'percent decrease in fuel efficiency' as well if regular maintenance is not performed on your vehicle. 
  
</p>
<p>
  Home Energy CO2 emissions -  
   
  - Gas: 
    pounds of CO2 per thousand cubic feet of natural gas * 12 months
      ^^ = (average monthly gas bill / price per thousand cubic feet) 
  
  - Electric:
    (average monthly electric bill / price per kWh) * electricity emission factor * 12 months
  
  - Oil:
    oil emission factor * 12 months 
    ^^ = (average monthly oil bill / price per gallon)

  - Propane:
    propane emission factor * 12 months
    ^^ = (average monthly propane bill / price per gallon)

</p>
      </div>
    </Page>
  );
}
