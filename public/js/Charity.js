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
    pageChange(direction){
      this.props.pageChange(direction)
    }
    componentDidMount(prevProps){
      console.log('prevProps')
      console.log(prevProps)
      console.log('prevProps')
    }
    getCharity(query){
      this.props.getCharity(query)
    }
    dislike(user_id, charity_id){
      this.props.removeLike(user_id, charity_id)
      this.props.disliked(charity_id)
    }
    like(charity, user){
      console.log(this.props.loggedUser.favorites)
      const new_like = {
        user_id: user.id,
        charity_id: charity.id,
        charity_name: charity.name
      }
      console.log(new_like)
      const new_liked = {
      id: charity.id,
      name: charity.name
      }
      this.props.createLike(new_like)
      this.props.changePage('charitiesSearch')
      this.props.liked(new_liked)
    }
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
      <h1 className="bigText">Your Source For Charitable Institutions</h1>
      {
        this.props.userLogin != true ?
      <CharitySearch
      clearBoard={this.props.clearBoard}
      charities={this.props.charities}
      charity={this.props.charity}
      getCharities={this.getCharities}
      userLogin={this.props.userLogin}/>
      :
      ''
    }
    {
      this.props.charities.length < 1 ?
        <div className="result">No results matched your search</div>
        :
        ''
    }
    {
      this.props.charities.length > 0 ?
        <div className="result">Your results are below</div>
        :
        ''
    }
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
          : <div>
              <h1>No results match your search</h1>
            </div>
          }
        <PaginationButtons
        pageChange = {this.props.pageChange} />
        </div>
      : ''
    }

    </div>
  )
  }
}
