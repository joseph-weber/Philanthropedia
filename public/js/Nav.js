class Nav extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="nav">
        <h1><img src="p3.png"/>hilathropedia</h1>
        {
          this.props.currentUser != null ?
          <h1>{this.props.currentUser.username}</h1>
            :
          <h1 onClick={()=>{this.props.changePage('userLogin')}}>Log-in</h1>
        }
        <h1>Your Profile</h1>
        <h1 onClick={()=>{this.props.logOut()}}>logOut</h1>
      </div>
    )
  }
}
