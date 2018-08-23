class Nav extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="nav">
        <div>
          <h1 onClick={()=>{this.props.changePage('charitiesSearch')}}><img src="p3.png"/>hilathropedia</h1>
        </div>
        {
          this.props.loggedUser != null ?
          <div>
            <h1 onClick={()=>{this.props.changePage('userShow')}}>{this.props.loggedUser.username}</h1>
          </div>
        :
          <div>
            <h1
            onClick={()=>this.props.changePage("userRegister")}>Register user</h1>
          </div>
        }
        {
          this.props.loggedUser ?
          this.props.loggedUser.admin ?
          <div>
            <h1
            onClick={()=>{this.props.changePage('crisis')}}>Update Crisis</h1>
          </div>
        :
          ''
          : ''
        }
        {
          this.props.loggedUser != null ?
          <div className="navright">
            <h1 onClick={()=>{this.props.logOut()}}>logOut</h1>
          </div>
            :
          <div className="navright">
            <h1 onClick={()=>{this.props.changePage('userLogin')}}>Log-in</h1>
          </div>
        }
      </div>
    )
  }
}
