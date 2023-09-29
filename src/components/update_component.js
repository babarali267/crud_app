
import axios from 'axios'


const Update_Form = ({id,u_name,u_email,u_phone,set_u_name,set_u_email,set_u_phone,getData})=>{

    const updateHandel =(id)=>{

          axios.put(`https://65035ca9a0f2c1f3faebd985.mockapi.io/user/${id}`,{
             name:u_name,
             email:u_email,
             phone : u_phone
          }).then(()=>{
              getData()
          })

          document.querySelector('.update_form').classList.remove('show')
      

    }

     return(<>
        <div className="update_form">
                     <h1>Update Form</h1>
                   
          <div className="form_div">
               <input type="text"  value={u_name} onChange={(e)=> set_u_name(e.target.value)} />
               <input type="text"  value={u_email}  onChange={(e)=> set_u_email(e.target.value)}/>
               <input type="text"  value={u_phone} onChange={(e)=> set_u_phone(e.target.value)} />
               <button onClick={()=>updateHandel(id)}>Update</button>
           </div>
        </div>
     
     </>)
}

export default Update_Form