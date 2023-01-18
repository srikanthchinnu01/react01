import {React,useState,useEffect} from 'react'
import axios  from 'axios';
import Pager from './Pager';
const apiurl=`https://jsonplaceholder.typicode.com/posts`




export default (props)=>{

//posts update for api
 var [posts,setStateposts] =useState([]);
 //Select Default max posts per Action
 var [DefaultMaxDisplayposts] =useState(8);
 //first button number
 var [DefaultButton,setStateDefaultButton] =useState(1);

 //last index number
 var lastindex=DefaultButton*DefaultMaxDisplayposts
 var FirstIndex=lastindex-DefaultMaxDisplayposts


//api calls by hooks
 useEffect(()=>
 {
    axios.get(apiurl).then((result)=>setStateposts(result.data))

},[])

//var DisplayDefailtButtonsposts=posts.slice(FirstIndex,lastindex)

//total posts
var totalPosts=posts.length
let handleButtonNumberChanges=(btnNumber)=>
{
    setStateDefaultButton(btnNumber) 

}

    return(<>
    <div className='container p-5'>
    <h5>Showing{FirstIndex+1}-{lastindex} of {totalPosts} results for posts</h5>
    <br /><br />
    
         <Pager TotalpostsInApi={totalPosts} maxDisplayrecordsPerButton={DefaultMaxDisplayposts}
        getButtonNumber={(bno)=>handleButtonNumberChanges(bno)}
        />

      <br/> <br />
    
    {
        posts.slice(FirstIndex,lastindex)
        .map((res,i)=>{
           return(<ul  key={i}>
            <li>
                <h4>{res.id}.{res.title}</h4>
                <p>{res.body}</p>
            </li>
            
           </ul>) 
           
        })
    }

    </div>
    

    



    </>)
 
}