import React from 'react'
import web from "../src/img/logo.png"
import newweb from "../src/img/1.png"
import newweb1 from "../src/img/2.png"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import newweb2 from "../src/img/3.png"

const home = () => {
    return (
        <>
       <div className="container-fluid">
           <div className="img0">
               <div className="col-md-12" >
           <img src={web} className="img-fluid animated " alt="homeimg"/>
           </div>
           </div>
       </div>
      
     <div className="container-fluid">
     <div className="row">
      
         <div className="col-md-3" style={{width:'64vh'}}>
         
         <img src={newweb}className=" img-fluid animated " alt="newimage"/>
         
         </div>
       
         <div className="col-md-9"style={{width:'134vh'}}>
             <h5> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
</h5>
<p style={{fontWeight:'bold'}}> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.<br/>
    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
	</p>
         <img src={newweb1}className="img-fluid animated" alt="newimage1"/>
         <p style={{fontWeight:'bold'}}>
         Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
         
         </p>
         
        
         </div>
        
        </div>
                   </div>
                   <div className="container-fluid">
                       <div className="colmd-12">
                       <p >
                       INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
   
                       </p>
                       </div>
                       
                   </div>
                   <div className="container-fluid">
                       <div className="row">
                           <div className="col-md-12">
<img src={newweb2}className="img-fluid animated" alt="newimage2"/>


                   </div>
                   </div>
                   </div>
                   <div>

                   <div className="container-fluid">
    <p style={{textAlign:'center',marginTop:'10px'}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
</p>
</div>
                   

                   </div>
                   
                   <div className="Line-2">
                      
                      </div>
                   
        
      
        </>
    )
}

export default home
