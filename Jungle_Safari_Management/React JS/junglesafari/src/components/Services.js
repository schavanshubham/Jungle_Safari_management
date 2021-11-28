import React from 'react';
import { Login } from './Login';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export class Services extends React.Component

{
    render()
    {
        return(
            
                <div id="srimg">
        
        <br/>
        <br/>
         
       <div>
<Table id="hmtbl">
      <Thead >
        <Tr>
          <Th>Bird watching</Th>
          <Th>Bonfire and fun</Th>
          <Th>Exploring Forest</Th>
          <Th>Rent Photography kit</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><img src="t1.jpg"  class="img-thumbnail"/></Td>
          <Td><img src="t2.jpg"  class="img-thumbnail"/></Td>
          <Td><img src="tt.jpg"  class="img-thumbnail"/></Td>
          <Td><img src="t4.jpg"  class="img-thumbnail"/></Td>

        </Tr>
       
      </Tbody>



      <Thead >
        <Tr id="cant">
          <Th >Canteen</Th>
          <Th>Family fun area</Th>
          <Th>Lodgging</Th>
          <Th>Gypsy on rent</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><img src="tg.jpg"  class="img-thumbnail"/></Td>
          <Td><img src="tm.jpg"  class="img-thumbnail"/></Td>
          <Td><img src="t3.jpg"  class="img-thumbnail"/></Td>
          <Td><img src="4.jpg"  class="img-thumbnail"/></Td>

        </Tr>
       
      </Tbody>

    </Table>
        </div>

          </div>
            );
        }
        }
        
export default Services;