class UserShow extends React.Component {
  constructor(props){
    super(props)
    this.getCharity = this.getCharity.bind(this)
  }
  getCharity(query){
    this.props.getCharity(query)
  }
  render(){
    return (
      <div className="container">
      <h1>{this.props.loggedUser.username}</h1>
        <h2>Your Charities</h2>
      {
        this.props.loggedUser.favorites.map((charity, index)=>{
          return (
              <h3
              className="userCharity" onClick={()=>{this.props.getCharity(charity.id)}}>{charity.name}</h3>
            )
        })
      }
      </div>
    )
  }
}
