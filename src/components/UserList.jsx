import React from 'react';
import User from "./User";

const Userlist = ({users,delMethod,stateChange}) => {
    
        if (users.length > 0) {
            return users.map(us =>{
                return <User name={us.name} state={us.state} id ={us.id} key={us.id} delMethod = {()=>delMethod(us.id)} stateChange ={stateChange}/>
            })   
        }else{
            return("Kullanıcı Bulunamadı!!")
        }
        
    
}
export default Userlist;