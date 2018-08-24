class Nav extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="nav">
      {/* Nav Bar */}
      {/* Logo that also returns user home */}
        <div>
          <h1 onClick={()=>{this.props.changePage('charitiesSearch'); this.props.clearBoard()}}><img src="p3.png"/>hilathropedia</h1>
        </div>
        {/* Ternary for if the user is logged in or not */}
        {
          this.props.loggedUser != null ?
          <div>
          {/* Username appears here and takes user to their show page */}
            <h1 onClick={()=>{this.props.changePage('userShow')}}>{this.props.loggedUser.username}</h1>
          </div>
        :
          <div>
          {/* Register a new user */}
            <h1
            onClick={()=>this.props.changePage("userRegister")}>Register user</h1>
          </div>
        }
        {/* Ternary for if user is an admin */}
        {
          this.props.loggedUser ?
          this.props.loggedUser.admin ?
          <div>
          {/* Update Crisis Button */}
            <h1
            onClick={()=>{this.props.changePage('crisis')}}>Update Crisis</h1>
          </div>
        :
          ''
          : ''
        }
        {/* Ternary for if user is logged in */}
        {/* Logout button */}
        {
          this.props.loggedUser != null ?
          <div className="navright">
            <h1 onClick={()=>{this.props.logOut()}}>logOut</h1>
          </div>
            :
          <div className="navright">
          {/* Login button */}
            <h1 onClick={()=>{this.props.changePage('userLogin')}}>Log-in</h1>
          </div>
        }
      </div>
    )
  }
}
