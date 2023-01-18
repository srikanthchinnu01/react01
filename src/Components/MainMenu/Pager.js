import {React,useState,useEffect} from 'react'


//pager
export default  (props)=>
{
    //undefined array
  var numbers=[]
  var {TotalpostsInApi,maxDisplayrecordsPerButton,getButtonNumber}=props
  var numberofButtons=Math.ceil(TotalpostsInApi /maxDisplayrecordsPerButton);
for (let i=1;i<=numberofButtons;i++)
{
    numbers.push(i)//defined array
}
 

    return(<>
    <div className='container p-5'>

       <ul className="pagination">
       {
            numbers.map((bno,i) =><li className="page-item"><a className="page-link" onClick={()=>getButtonNumber(bno)}>{bno}</a></li>)
        }
   
       </ul>
    </div>

    </>)
 
}
