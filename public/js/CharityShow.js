class CharityShow extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="container">
        <h1>{this.props.charity.name}</h1>
        <h1>{this.props.charity.street_address}</h1>
        <h1>{this.props.charity.city}</h1>
        <h1>{this.props.charity.zip}</h1>
        <h1>{this.props.charity.state}</h1>
        <h1>{this.props.charity.category}</h1>
        <h1>{this.props.charity.deductibility}</h1>
        <h1>{this.props.charity.exemption}</h1>
      </div>
    )
  }
}
