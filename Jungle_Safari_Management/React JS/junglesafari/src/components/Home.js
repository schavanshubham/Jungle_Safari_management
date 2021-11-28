import React from 'react';
import "./Home.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export class Home extends React.Component
{
    render()
    {
        
        return( 
        <div 
  style={{ 
     backgroundImage: `url("/18.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize:"cover",height:'534px',width:'1280px',backgroundAttachment:'fixed',    }} > 

<br/>
<br/>
 
<Table id="hmtbl">
      <Thead >
        <Tr>
          <Th>Season</Th>
          <Th>Days</Th>
          <Th>Morning timings</Th>
          <Th>Evening timings</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Winter (16th October to 28th/29th February)</Td>
          <Td>Monday To Sunday</Td>
          <Td>6:45: AM to 9:45 AM</Td>
          <Td>3:00 PM to 6:00 PM</Td>

        </Tr>
        <Tr>
          <Td>Summer (1st March to 15th June)</Td>
          <Td>Monday To Sunday</Td>
          <Td>6:00 AM to 9:00 AM</Td>
          <Td>4:00 PM to 7:00 PM</Td>
        </Tr>
        <Tr>
          <Td>Summer/Winter</Td>
          <Td>Monday To Sunday</Td>
          <Td>8:30 AM to 11:30 AM</Td>
          <Td>-</Td>
        </Tr>
        <Tr>
          
          <h3>Note:Our Jungle safari is closed from 16th june to 15th Oct Every Year.</h3>
          
        </Tr>
      </Tbody>
    </Table>
    <br/>
<br/>
<div className="content">
<h2>Jungle Trail:</h2>
<h5 id="info">According to the Forest Department at present, the number of Asiatic lions at Gir is 600. Now think of spending a whole day with these tamed beasts. Yes, it is possible once you are at the Gir Wildlife Sanctuary located near the district of Junagarh and spreading across an area of 1412 sq. km. is a paradise for wildlife lovers. The Gir National Park in is the most often visited sanctuary of India. Holding a huge population of Asiatic lions, Gir offers a once in a lifetime wildlife experience. You can enjoy the best jungle trail in India when you are at the Sasan Gir National Park. Gir records near about 300 types of birds along with 24 species of reptiles and 30 types of mammals.</h5>
</div>

</div>
 
    );
}
}
export default Home;