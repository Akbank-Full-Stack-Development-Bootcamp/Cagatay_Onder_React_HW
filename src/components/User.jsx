import React from 'react';
// Bir componenti tanımlıyoruz arrow func. ile.
// User içine props tanımlamamız lazım ki App.js de belirttiğimiz propsları yakalayalım
const User = ({name,state,id,delMethod,stateChange}) =>{
    const changeHandler = (e)=>{
        stateChange({state:e.target.value,id:id})
    }
    return(
        <div className = "card">
            <h1>Adı :{name}</h1>
            <h3>Durum : <span className={state}>{state}</span></h3>
            <select name="state" id="state" onChange={changeHandler} value={state}>
                <option value="online">online</option>
                <option value="offline">offline</option>
                <option value="busy">busy</option>
            </select>
            <button onClick={delMethod}>Sil !!</button>
        </div>
    )
}
export default User;