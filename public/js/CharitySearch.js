class CharitySearch extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    let zip;
    let city;
    let state;
    let category;
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
      if(this.refs.category.value > 0){
        category = '&categoryID=' + this.refs.category.value
        console.log(category)
      } else {
         category = ''
      }
    const query = category + zip + city + state
    console.log(query)
    console.log(event)
    this.props.getCharities(query)
  }
  render(){
    return (
      <div className="form">
        <h1>Search For Your Charity Here</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="input is-primary" ref="city" type="text" placeholder="city"/>
          <input className="input is-primary" ref="zip" type="text" placeholder="zip"/>
          <input className="input is-primary" ref="state" type="text" placeholder="state"/>
          <select className="select" ref="category" name="category">
            <option value="0">All</option>
            <option value="1">Animals</option>
            <option value="2">Arts, Culture, Humanities</option>
            <option value="3">Education</option>
            <option value="4">Environment</option>
            <option value="5">Health</option>
            <option value="6">Human Services</option>
            <option value="7">International</option>
            <option value="8">Human & Civil Rights</option>
            <option value="9">Religion</option>
            <option value="10">Community Devlopment</option>
            <option value="11">Research & Public Policy</option>
          </select>
          <input className="button is-primary" type="submit" value="submit answer"/>
        </form>
        {this.props.charities && this.props.charities.length != 0 ?
        <button className="button is-primary" onClick={()=>{this.props.clearBoard()}}>Clear</button>
        : ''
      }
      </div>
    )
  }
}
