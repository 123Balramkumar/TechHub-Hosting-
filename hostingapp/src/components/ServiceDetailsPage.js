import React from 'react'
import Banner from './Banner'
import weservice from '../assets/weservice.webp'
import { BsDatabase } from 'react-icons/bs'
import { MdOutlineSpeed } from 'react-icons/md'
import {AiFillPropertySafety} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {MdSdStorage} from 'react-icons/md'
function ServiceDetailsPage() {
  return (
    <div>
        {/* <Banner/> */}
<div style={{display:'flex',padding:20,flexWrap:'wrap'}}>
    <img src={weservice} style={{width:'50%',borderRadius:10}} />
    <div style={{width:'45%',padding:10,marginLeft:20,fontWeight:800,fontFamily:'roboto',
}}>
         <h1 style={{fontWeight:800,fontSize:60}} >Web Hosting that's fast and reliable.</h1>
        <p>Get trusted hosting from the world’s #1 web host.</p>
        <p style={{display:'flex',alignItems:'center',}}> <BsDatabase/>99.9% uptime — guaranteed. **</p>
        <p style={{display:'flex',alignItems:'center'}}><MdOutlineSpeed/> Optimized servers, up to 40% faster. ^</p>
        <p style={{display:'flex',alignItems:'center'}}> <AiFillPropertySafety/>Free SSL certificate for your site. 3</p>
        <button style={{padding:10,width:'40%',background:"black",color:'white',borderRadius:10}}>See Plans and Pricing <AiOutlineArrowRight/> </button>
<div style={{marginTop:50,}}>
        <button style={{padding:10,width:'40%',background:"black",color:'white',borderRadius:10}}>Plans and Pricing</button>
        <button style={{padding:10,width:'40%',background:"black",color:'white',borderRadius:10,marginLeft:30}}>Web Hosting Plus  Plans</button>
        </div>
         </div> 
</div>
<div style={{display:'flex',flexWrap:'wrap',padding:20,justifyContent:'space-between'}}>
    <div style={{width:"22%",minHeight:800,borderRadius:10,boxShadow:'0px 7px 15px 0px rgba(0, 0, 0, 0.25)',padding:30}}>
<h3>Web Hosting Starter
</h3>
<button style={{background:'none',borderRadius:5,width:180,}}><b>FOR SIMPLE SITES</b></button>
<p style={{marginTop:20}}>Low-cost affordable hosting to get you started.</p>
<h1  style={{marginTop:20}}>₹ 79.00/mo</h1>
<p  style={{marginTop:15}}>With a 3-yr term. You pay ₹ 2,844.00 today.
Renews at ₹ 219.00/mo.</p>
<button style={{padding:10,width:'100%',background:'black',color:'white',borderRadius:5}}>Buy Now</button>
<p style={{marginTop:20}}><CgWebsite style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 1 website</p>
<p style={{marginTop:20}}><BsDatabase style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 1 database</p>
<p style={{marginTop:20}}><MdSdStorage style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 10 GB Storage</p>
<p style={{marginTop:20}}><MdOutlineSpeed style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 512 MB RAM </p>
 </div>
 <div style={{width:"22%",minHeight:800,borderRadius:10,boxShadow:'0px 7px 15px 0px rgba(0, 0, 0, 0.25)',padding:30}}>
<h3>Web Hosting Economy
</h3>
<button style={{background:'none',borderRadius:5,width:180,}}><b>FOR SIMPLE SITES</b></button>
<p style={{marginTop:20}}>Low-cost affordable hosting to get you started.</p>
<h1  style={{marginTop:20}}>₹ 199.00/mo</h1>
<p  style={{marginTop:15}}>With a 3-yr term. You pay ₹ 2,844.00 today.
Renews at ₹ 219.00/mo.</p>
<button style={{padding:10,width:'100%',background:'black',color:'white',borderRadius:5}}>Buy Now</button>
<p style={{marginTop:20}}><CgWebsite style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 1 website</p>
<p style={{marginTop:20}}><BsDatabase style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 10 database</p>
<p style={{marginTop:20}}><MdSdStorage style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 25 GB Storage</p>
<p style={{marginTop:20}}><MdOutlineSpeed style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 1024 MB RAM </p>
 </div>
 <div style={{width:"22%",minHeight:800,borderRadius:10,boxShadow:'0px 7px 15px 0px rgba(0, 0, 0, 0.25)',padding:30}}>
<h3>Web Hosting Deluxe
</h3>
<button style={{background:'none',borderRadius:5,width:180,}}><b>FOR SIMPLE SITES</b></button>
<p style={{marginTop:20}}>Low-cost affordable hosting to get you started.</p>
<h1  style={{marginTop:20}}>₹ 299.00/mo</h1>
<p  style={{marginTop:15}}>With a 3-yr term. You pay ₹ 2,844.00 today.
Renews at ₹ 219.00/mo.</p>
<button style={{padding:10,width:'100%',background:'black',color:'white',borderRadius:5}}>Buy Now</button>
<p style={{marginTop:20}}><CgWebsite style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 10 website</p>
<p style={{marginTop:20}}><BsDatabase style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 25 database</p>
<p style={{marginTop:20}}><MdSdStorage style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 50 GB Storage</p>
<p style={{marginTop:20}}><MdOutlineSpeed style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 2040 MB RAM </p>
 </div>
 <div style={{width:"22%",minHeight:800,borderRadius:10,boxShadow:'0px 7px 15px 0px rgba(0, 0, 0, 0.25)',padding:30}}>
<h3>Web Hosting Unlimited
</h3>
<button style={{background:'none',borderRadius:5,width:180,}}><b>FOR SIMPLE SITES</b></button>
<p style={{marginTop:20}}>Low-cost affordable hosting to get you started.</p>
<h1  style={{marginTop:20}}>₹ 399.00/mo</h1>
<p  style={{marginTop:15}}>With a 3-yr term. You pay ₹ 2,844.00 today.
Renews at ₹ 399.00/mo.</p>
<button style={{padding:10,width:'100%',background:'black',color:'white',borderRadius:5}}>Buy Now</button>
<p style={{marginTop:20}}><CgWebsite style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 25 website</p>
<p style={{marginTop:20}}><BsDatabase style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 50 database</p>
<p style={{marginTop:20}}><MdSdStorage style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 5 GB Storage</p>
<p style={{marginTop:20}}><MdOutlineSpeed style={{border:'1px solid black',fontSize:30,padding:4,borderRadius:5}}/> 4048 MB RAM </p>
 </div></div>
        
    </div>
    
  )
}

export default ServiceDetailsPage