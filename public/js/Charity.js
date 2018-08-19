class Charity extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showBoard: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
  }
    clearBoard(){
      this.setState({
        showBoard: false
      })
      console.log(this.state.showBoard)
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
      if(this.refs.category){
        if(this.refs.category > 0){
          category = '&categoryID=' + this.refs.category.value
        } else {
           category = ''
        }
        }
      const query = category + zip + city + state
      console.log(query)
      setTimeout(
    function() {
        this.setState({showBoard: true});
    }
    .bind(this),
    1750
);
      console.log(this.state.showBoard)
      this.props.functionExecute(query)
    }
  render(){
    return (
    <div>
      <div className="form">
        <h1>Search For Your Charity Here</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="input is-primary" ref="city" type="text" placeholder="city"/>
          <input className="input is-primary" ref="zip" type="text" placeholder="zip"/>
          <input className="input is-primary" ref="state" type="text" placeholder="state"/>
          <select className="select is-primary is-medium" ref="category" name="category">
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
      </div>
      {this.props.charities == null ?
      <div>No results matched your search</div>
    :
      <div>Your results are below</div>
    }
      {this.state.showBoard && this.props.charities ?
        <div>
        {this.props.charities.length != 0 ?
          <div>
            <button onClick={()=>{this.clearBoard()}}>Clear</button>
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
        : <div>
            <h1>No results match your search</h1>
          </div>
        }
      </div>
    : <div>Search</div>
  }

    </div>
  )
  }
}
