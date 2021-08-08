import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './App.css';
import { ModalDisplay } from './ModalDisplay';

function App() {
  const[launches,setLaunches]=useState([]);
  const[show, setShow]=useState(false);
  const[mystatus, setStatus]=useState('all');

  const getSpaceships=async()=>{
    const response=await fetch('https://api.spacexdata.com/v3/launches');
    setLaunches(await response.json());
  }
  useEffect(()=>{
    getSpaceships();
  },[]);

  const tableHeader=()=>{
    const header=['No.','Launched(UTC)','Location','Mission','Launch Status'];
    return(
      header.map((key,index)=>{
        return <th key={index}>{key}</th>
      })
    )
  }

  const tableData=()=>{
    return(
      launches && launches.map((launch,key)=>{
        console.log(launch,key);
        const status=()=>{
          if(launch.upcoming===true) return <p className="upcoming"> Upcoming</p>;
          else if(launch.launch_success===true) return <p className="success"> Success </p>;
          else if(launch.launch_success!==true) return <p className="fail">Failed</p>;
        };
          return <tr key={key} className="tableRow" onClick={()=>{setShow(true); console.log(show)}} >
          { mystatus==='all'? 
            <>
            <td>{launch.flight_number}</td>
            <td>{launch.launch_date_utc}</td>
            <td>{launch.launch_site.site_name}</td>
            <td>{launch.mission_name}</td>
            <td>{status()}</td>
            </> :
          launch.launch_success===mystatus &&
            <>
            <td>{launch.flight_number}</td>
            <td>{launch.launch_date_utc}</td>
            <td>{launch.launch_site.site_name}</td>
            <td>{launch.mission_name}</td>
            <td>{status()}</td>
            </>
          }
           </tr>   
      })
    )
  }  
  return (
    <>
    <h1 className="heading">SpaceX</h1>
    {/* <Dropdown class="status">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    All
  </Dropdown.Toggle> */}

  <DropdownButton className="filter"title="All">
    <Dropdown.Item className="filterItem-all" onclick={(()=>{setStatus('all')})}>All</Dropdown.Item><br/>
    <Dropdown.Item className="filterItem-upcoming" onClick={(()=>{setStatus(null)})}>Upcoming</Dropdown.Item><br/>
    <Dropdown.Item className="filterItem-success" onClick={(()=>{setStatus(true)})} >Success</Dropdown.Item><br/>
    <Dropdown.Item className="filterItem-failure" onClick={(()=>{setStatus(false)})}>Failure</Dropdown.Item>
  </DropdownButton>
{/* </Dropdown> */}
    {/* <div className="status">
    <button className="upcoming" onClick={(()=>{setStatus(null);})}>Upcoming</button>
    <button className="success" onClick={(()=>{setStatus(true);})}>Success</button>
    <button className="fail" onClick={(()=>{setStatus(false);})}>Failure</button>
    <button className="All" onClick={(()=>{setStatus('all');})}>All</button>
    </div> */}
   
   { launches.map((launch,key)=>{ 
      return (
    <ModalDisplay 
      show={show} 
      onhide={()=>setShow(false)} 
      mission={launch.mission_name} 
      img={launch.links.mission_patch}
      flight_number={launch.flight_number}
      mission_name={launch.mission_name}
      rocket_type={launch.rocket.rocket_type}
      rocket_name={launch.rocket.rocket_name}
      manufacturer='SpaceX'
      nationality='SpaceX'
      />
      )
    })}

      <table className="main">
      <thead>
        {tableHeader()}
      </thead>
      <tbody>
        {tableData()}
       </tbody>
      </table>
    </>
  );
}

export default App;
