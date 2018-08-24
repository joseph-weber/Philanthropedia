class Charity extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showBoard: false
    }
    this.getCharities = this.getCharities.bind(this)
    this.like = this.like.bind(this)
    this.dislike = this.dislike.bind(this)
    this.getCharity = this.getCharity.bind(this)
    this.pageChange = this.pageChange.bind(this)
  }
  /// Sends info to pageChange function
    pageChange(direction){
      this.props.pageChange(direction)
    }
    /// getCharity Function
    getCharity(query){
      this.props.getCharity(query)
    }
    /// Dislike functions
    dislike(user_id, charity_id){
      this.props.removeLike(user_id, charity_id)
      this.props.disliked(charity_id)
    }
    /// Like function
    like(charity, user){
      const new_like = {
        user_id: user.id,
        charity_id: charity.id,
        charity_name: charity.name
      }
      const new_liked = {
      id: charity.id,
      name: charity.name
      }
      this.props.createLike(new_like)
      this.props.changePage('charitiesSearch')
      this.props.liked(new_liked)
    }
    /// get all charities
    getCharities(query){
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
    {/* Title */}
      <h1 className="bigText">Your Source For Charitable Institutions</h1>
      <CharitySearch
      clearBoard={this.props.clearBoard}
      charities={this.props.charities}
      charity={this.props.charity}
      getCharities={this.getCharities}
      userLogin={this.props.userLogin}/>
      {/* No search results will render a message here */}
    {
      this.props.charities.length < 1 ?
        <div className="result">No results matched your search</div>
        :
        ''
    }
    {/* Message if search yielded results */}
    {
      this.props.charities.length > 0 ?
        <div className="result">Your results are below</div>
        :
        ''
    }
    {/* Search results render here */}
      {this.props.charities ?
        <div>
          {this.props.charities.length != 0 ?
              <div className="charities">
              {this.props.charities.map((charity, index) =>
                  {
                    return (
                      <div className="charity">
                        <div onClick={()=>{this.getCharity(charity.id)}}>
                          <h1>{charity.name}</h1>
                          <h2>Address:</h2>
                          <h3>{charity.street_address}</h3>
                          <h3>{charity.city}</h3>
                          <h3>{charity.zip}</h3>
                          <h3>{charity.state}</h3>
                        </div>
                        {/* Favorite button dislike vs like logic */}
                        {
                          this.props.loggedUser ?
                            this.props.loggedUser.favorites.some(favorite => favorite.name == charity.name) ?
                                <button onClick={()=>{this.dislike(this.props.loggedUser.id, charity.id)}} className="button is-primary">Dislike</button>
                              : <button onClick={()=>{this.like(charity, this.props.loggedUser)}} className="button is-primary">Like</button>
                          : ''
                        }
                      </div>
                      )
                    }
                  )}
                </div>
          : ''
          }
          {/* Page buttons */}
        <PaginationButtons
        page={this.props.page}
        charities={this.props.charities}
        pageChange = {this.props.pageChange} />
        </div>
      : ''
    }
    <h1
    onClick={()=>{this.props.changePage('crises')}}>hi</h1>

    </div>
  )
  }
}
