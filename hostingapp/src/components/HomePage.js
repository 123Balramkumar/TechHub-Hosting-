// HomePage.js
import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const Data ={
    cardData:[
     {
       icon:'https://img.freepik.com/premium-vector/hosting-logo-vector-design-template_717549-251.jpg',
       title:'Hosting',
       description:'TechHub Hosting: Elevate your online presence with seamless domains, robust hosting, dedicated servers, and tailored cloud solutions.',
       button:'EXPLORE'
     
     },
     {
       icon:'https://freepngimg.com/thumb/domain/13-2-domain-png-file-thumb.png',
       title:'Domain',
       description:'Unlock your online potential with TechHub Domains Your gateway to a distinctive and memorable digital presence.',
       button:'EXPLORE'
     
     },
     {
       icon:'https://png.pngtree.com/png-vector/20190811/ourmid/pngtree-vector-server-icon-png-image_1660325.jpg',
       title:'Server',
       description:'Elevate your performance with TechHub Servers Robust solutions for unmatched reliability and power in the digital realm.',
       button:'EXPLORE'
     
     },
     {
       icon:'https://img.freepik.com/premium-photo/cloud-shape-word-white-background-3d-illustration_764664-12012.jpg',
       title:'Cloud',
       description:'Unleash the power of the cloud with TechHub Cloud Services Elevate your business agility and scalability to new heights.',
       button:'EXPLORE'
     
     }
   
   
     ]
   }
  return (
    <div className="home">
      <Banner/>
  
 <div style={{display:'flex',justifyContent:"space-around",flexWrap:'wrap', padding:20,}}>
    {Data.cardData.map((item, key) => (
      <div key={item.title} style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center', height: 350, width: 260, borderRadius: "0px 100px 0 100px", color: "black", padding: 20,boxShadow:'0px 7px 15px 0px rgba(0, 0, 0, 0.25)' }}>
        <img style={{height:65,width:65,borderRadius:'10px',background:'white',}} src={item.icon} />
        <div>
          <h1>{item.title}</h1>
        
        </div>
        <div>  {item.description}</div>
        <Link to='/DetailsPage'>
        <button style={{padding:"10px",width:'120px',borderRadius:30,marginTop:20}}>
          {item.button}</button>
          </Link>
      </div>
    ))}
    </div>

</div>
    
  );
};

export default HomePage;



