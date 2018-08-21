class Charity extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showBoard: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.like = this.like.bind(this)
    this.dislike = this.dislike.bind(this)
    this.getCharity = this.getCharity.bind(this)
  }
    getCharity(query){
      this.props.getCharity(query)
    }
    like(charity, user){
      console.log('red')
      console.log(charity)
      console.log(user)
      const new_like = {
        user_id: user.id,
        charity_id: charity.id,
        charity_name: charity.name
      }
      console.log(new_like)
      this.props.createLike(new_like)
    }
    dislike(){
      console.log('hello')
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
      this.props.functionExecute(query)
    }
  render(){
    return (
    <div>
      <h1 className="bigText">Your Source For Charitable Institutions</h1>
      {
        !this.props.userLogin ?
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
        <button className="button is-primary" onClick={()=>{this.clearBoard()}}>Clear</button>
        : ''
      }
      </div>
      :
    ''
  }
      {this.props.charities == null ?
      <div className="result">No results matched your search</div>
    :
      <div className="result">Your results are below</div>
    }
      {this.state.showBoard && this.props.charities ?
        <div>
          {this.props.charities.length != 0 ?
              <div className="charities">
              {this.props.charities.map((charity, index) =>
                  {
                    return (
                      <div onClick={()=>{this.getCharity(charity.id)}} className="charity">
                        <h1>{charity.name}</h1>
                        <h2>{charity.street_address}</h2>
                        <h2>{charity.city}</h2>
                        <h2>{charity.zip}</h2>
                        <h2>{charity.state}</h2>
                        {
                          this.props.loggedUser.favorites.some(favorite => favorite == charity.name) ?
                              <button onClick={()=>{this.dislike()}} className="button is-primary">Dislike</button>
                            : <button onClick={()=>{this.like(charity, this.props.loggedUser)}} className="button is-primary">Like</button>
                          }
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
      : ''
    }

    </div>
  )
  }
}
