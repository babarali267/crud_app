
import { useEffect, useState } from "react"
import Add_Form from "./add_component"
import Update_Form from "./update_component"
 import axios from  'axios'

const View_Data = ()=>{
  
   const [data,setData] = useState([])
   const [alert,setAlert]  = useState('')
  
     function  getData() { 
         axios.get('https://65035ca9a0f2c1f3faebd985.mockapi.io/user').then((res)=>{
            console.log(res.data);
            setData(res.data)
         })
      }
  // delHandler

   const delHandler =(id)=>{
     axios.delete(`https://65035ca9a0f2c1f3faebd985.mockapi.io/user/${id}`).then(()=>{
         getData()
         setAlert("DATA HAS Deleted")
    
     })
   }

    // updateHandler  
   
     const [myid,setID] = useState("")
     const [u_name,set_u_name] = useState('')
     const [u_email,set_u_email] = useState('')
     const [u_phone,set_u_phone] = useState('')

     const updateHandler = (id)=>{

        axios.get(`https://65035ca9a0f2c1f3faebd985.mockapi.io/user/${id}`).then((res)=>{
           console.log(res);
           setID(id)
            set_u_name(res.data.name)
            set_u_email(res.data.email)
            set_u_phone(res.data.phone)
        })

        document.querySelector('.update_form').classList.add('show')

     }



      useEffect(()=>{
        getData()
      },[])


     return(<>
       <Add_Form  getData={getData} />
        <div className="view_component">
           <h1>view form  <span className="alert">{alert}</span></h1>
          <table className="view_table">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
         
         {
            data.map((item)=>(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td><button className="del_btn" onClick={()=>delHandler(item.id)}>Delete</button></td>
          <td><button className="up_btn" onClick={()=>updateHandler(item.id)}>Update</button></td>
        </tr>
            
             ))
         }
     
</table>
        </div>

    <Update_Form  id={myid}  u_name={u_name} u_email={u_email} u_phone ={u_phone} 
                  set_u_name={set_u_name} set_u_email={set_u_email} set_u_phone={set_u_phone}
                  getData ={getData}
     
    />




     </>)
}

export default View_Data