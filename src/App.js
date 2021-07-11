import React from 'react';

import UserList from'./components/UserList';
import AddUser from'./components/AddUser';
class App extends React.Component {
  state={
    idx:4,
    users:[
      {name:"Çağatay", state:"online" ,id:1},
      {name:"Recep", state:"offline" ,id:2},
      {name:"Sılay", state:"busy" ,id:3}
    ]
  }
  addUserMethod=(name) =>{
    let id = this.state.idx;
    let newUser = {
      name:name,
      state:"online",
      id : id
    }
    let newUsers = [...this.state.users,newUser]
    this.setState({users : newUsers, idx:id+1})
  }
  deleteUserMethod = (id) => {
    let deletedUsers = this.state.users.filter(us=>{
      return us.id !== id
    })
    this.setState(
      {users:deletedUsers}
    )
  }
  stateChangeHandler = (data) =>{
    let stateChangeUsers = this.state.users.map(us=>{
      if (us.id === data.id) {
        us.state = data.state
      }
      return us;
    })
    this.setState({
      users:stateChangeUsers
    })
  }

  render(){
  return (
    <div>
        <UserList users ={this.state.users} delMethod={this.deleteUserMethod} stateChange ={this.stateChangeHandler}/>
        <hr/>
        <AddUser addUserMethod={this.addUserMethod}/>
    </div>
    
    
  );
  }
}

export default App;
