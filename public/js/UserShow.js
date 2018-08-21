class UserShow extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="container">
      <h1>{this.props.loggedUser.username}</h1>
      {
        this.props.loggedUser.favorites.map((charity, index)=>{
          return (
              <h3>{charity.name}</h3>
            )
        })
      }
      </div>
    )
  }
}
