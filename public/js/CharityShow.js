class CharityShow extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="container">
        <h1>{this.props.charity.name}</h1>
        <h2>{this.props.charity.category}</h2>
        <h3>{this.props.charity.deductibility}</h3>
        <h3>{this.props.charity.exemption}</h3>
        <h2>Address:</h2>
        <h3>{this.props.charity.street_address}</h3>
        <h3>{this.props.charity.city}</h3>
        <h3>{this.props.charity.zip}</h3>
        <h3>{this.props.charity.state}</h3>
      </div>
    )
  }
}
