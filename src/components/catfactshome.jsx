import styles from './banner.module.css';
import { useEffect, useState } from 'react';
import { BrowserRouter , Route , Routes , Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
export function  Catfactshome(){

    const navigate = useNavigate();
    const [facts , setfacts] = useState(["fac1","fac2","FAC3","FAC4"]);
    //DOWNLOAD THE API DATA USING AXIOS AND SET THOSE ARRAY OF FACTS TO SETFACTS

    useEffect(() => {
        const fetchData = async () => {
          try {
           const response = await axios.get('https://catfactsbe.onrender.com/getcatfacts');
       
           if(response){

            setfacts(response.data.userregistrationdetails);
           }

            console.log('Data:', response.data.userregistrationdetails); // Log the actual data
        } catch (error) {
           console.error("Error fetching student data:", error); // Log error if occurs
         }
       };
   
       fetchData(); // Call the function to fetch data
     }, []);



    const [index, setIndex] = useState(0);
    function Handleuploadfacts(){

        navigate("/addcatfacts");

    }

    
    
    
    // async function  catfacts (){
    //   var box = document.getElementById("box");
    // var reponse = await fetch("https://meowfacts.herokuapp.com/");
    // var text = document.getElementById("texts");
    
    // var out = await reponse.json();
    // console.log(out.data[0]);
    // text.innerHTML = `
    
    
    
    // <div> ${facts[index]}</div>
    
    
    
    
    // `;
    
    
    
    // }

    const handleShow = () => {
        // Update the index to show the next number
        console.log(index);
        console.log(facts.length);

        if(index < facts.length-1 ){
            setIndex((prevIndex) => (prevIndex + 1) );
            console.log(index);
            console.log(facts.length);
            

        }
        if(index === facts.length-1){
            setIndex(0);
        }
    
      };
    
      return (
        <>
          <div>
            
            
        <div className={styles.main}>
          <div className={styles.generatefacts}>
          
        <button onClick={()=>{Handleuploadfacts()}} style={{ width: '250px',  }}>Click here to Upload your  facts </button>
        </div>              
            <div className={styles.container}>
              
    
    <div className={styles.box}>
      
       <div className={styles.catheader}>
        <h3>CAT FACTS : <i className="fa fa-heartbeat" aria-hidden="true"></i></h3>
       </div>
      { facts ? (


<div id='texts'>

{facts[index].catfacts}
</div>


      ) : ""




      }
        
    
    </div>
    
    
            </div>
    
    
            
    
    
                    <div className={styles.items}>
    
                        <button onClick={()=>{



handleShow();
                        }}>Generate facts <i className="fa fa-check" aria-hidden="true"></i></button>
                        
                        <h5>Click above button to generate random cat facts <i className="fa fa-heart-o" aria-hidden="true"></i></h5>
                    </div>
                 
            
    
    
            
        </div>
        </div>
     
          
        </>
      )


}