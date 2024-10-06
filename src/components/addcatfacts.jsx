import styles from './banner.module.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter , Route , Routes , Link ,useNavigate} from 'react-router-dom';
export function Addcatfacts(){
    const navigate = useNavigate();
function Handlebacktohome(){


    navigate("/");



}
console.log(`add`);
const [newfact , setnewfact] = useState();
const [saved , setsaved] = useState(false);
async function Handleaddnewfact(){

console.log(newfact);

if(newfact){

    const response = await axios.post('https://catfactsbe.onrender.com/addcatfacts', {catfacts : newfact
    });
    
    if(response){

        setnewfact("");
    
    }
        


}



}
return(<>


<div>
            
            
            <div className={styles.main}>
              <div className={styles.generatefacts}>
              
            <button onClick={()=>{Handlebacktohome()}}>Back to home </button>
            </div>              
                <div className={styles.container}>
                  
        
        <div className={styles.box}>
          
           <div className={styles.catheader}>
            <h3>Add your fact below : <i className="fa fa-heartbeat" aria-hidden="true"></i></h3>
           </div>
          
            <div id='inputtext'>
                
            <input type="text" className='catfactsinput' style={{ width: '400px', height: '160px' }}
            value={newfact}
            required={true}
            onChange={(event)=>{

console.log(event.target.value);
setnewfact(event.target.value);



            }}
            
            />

            
        </div>
        
        </div>
        
        
                </div>
        
        
                
        
        
                        <div className={styles.items}>
        
                            <button onClick={()=>{
    
    
    Handleaddnewfact();
 
                            }}>Add fact <i className="fa fa-check" aria-hidden="true"></i></button>
                            
                         
                        </div>
                     
                
        
        
                
            </div>
            </div>




</>)



}