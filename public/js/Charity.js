class Charity extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    handleSubmit(event){
      event.preventDefault();
      let zip;
      let city;
      let state;
      if(this.refs.zip){
        zip = '&zip=' + this.refs.zip.value
      } else {
        zip = ''
      }
      if(this.refs.city){
        city = '&city=' + this.refs.city.value
      } else {
        city = ''
      }
      if(this.refs.state){
        state = '&state=' + this.refs.state.value
      } else {
        state = ''
      }
      const query = zip + city + state
      this.props.functionExecute(query)
    }
  render(){
    console.log('this.props.charities')
    console.log(this.props.charities)
    console.log('this.props.charities')
    return (
    <div>
      <h1>Not hello World</h1>
      <button onClick={this.handleSubmit}>hi</button>
      <form onSubmit={this.handleSubmit}>
        <input ref="city" type="text" placeholder="city"/>
        <input ref="zip" type="text" placeholder="zip"/>
        <input ref="state" type="text" placeholder="state"/>
        <input type="submit" value="submit answer"/>
      </form>
      { this.props.charities ?
        <div>
        <h1>hi</h1>
      {this.props.charities.map((charity, index) =>
      {
        return (
      <div className="charity">
      <h1>{charity.name}</h1>
      <h2>{charity.street_address}</h2>
      <h2>{charity.city}</h2>
      <h2>{charity.zip}</h2>
      <h2>{charity.state}</h2>
      </div>
    )
    }
    )}
      </div>
    : ''
  }

    </div>
  )
  }
}
