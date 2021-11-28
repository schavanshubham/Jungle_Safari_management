import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Table} from "react-bootstrap";



const Pack = () => {
  const [package_info, setPackage_info] = useState([]);

  useEffect(() => {
    loadPackage();
  }, []);

  const loadPackage = async () => {
    const result = await axios.get("http://localhost:8080/packageinfo");
    setPackage_info(result.data.reverse());
  };

  

  return (
    <div
    style={{
       backgroundImage: `url("/12.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize:"cover",width:'1260px',height:'620px',color:'white'
    }}>
    <div className="container">
      <div className="py-4">
        <h1>Packages Available !!</h1><br/><br/>
        <Table class="table" striped bordered hover variant="dark">

          <thead >
            <tr>
              <th >SR.no</th>
              <th >Package Name</th>
              <th >Validity Date</th>
              <th >Price for Foreigner</th>
              <th >Price for Indian  </th>
              <th >Maximum Members </th>
              <th >Description </th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {package_info.map((package_info, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{package_info.pkg_name}</td>
                <td>{package_info.validity_date}</td>
                <td>{package_info.pkg_price_frgn}</td>
                <td>{package_info.pkg_price_ind}</td>
                <td>{package_info.max_people}</td>
                <td>{package_info.description}</td>
                
                <td>
                <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/userhome/${package_info.pkg_id}`}
                  >
                    Booking
                  </Link>
                
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  );
};

export default Pack;