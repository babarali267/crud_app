
import { useState } from 'react'
import './style.css'
 
 import axios from 'axios'  

const Add_Form = ({getData})=>{

      const [name,setName] = useState('')
      const [email,setEmail] = useState('')
      const [phone,setphone] = useState('')
       const [alert,setAlert] = useState('')

    const onHandelSubmit =()=>{
         axios.post('https://65035ca9a0f2c1f3faebd985.mockapi.io/user',{
             name:name,
             email:email,
             phone:phone
         }).then(()=>{
              setAlert('Data added')
               setName('');setEmail('');setphone('')
               getData()
         })
    }


     return(<>
          <div className='add_form'>
              <h1>Add Data  <span>{alert}</span></h1>

              <input type='text' placeholder='name'  value={name}
               onChange={(e)=>setName(e.target.value)}/>

              <input type='email' placeholder='email'  value={email}
              onChange={(e)=>setEmail(e.target.value)}/>

              <input type='text' placeholder='number'  value={phone}
              onChange={(e)=>setphone(e.target.value)}/>

              <button  onClick={onHandelSubmit} >Add Item</button>

          </div>  
     </>)
}

export default Add_Form