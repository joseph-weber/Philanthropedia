class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedUser: null,
      charities: false,
      charity: false,
      currentQuery: null,
      lastFavorite: {},
      page: null,
      query1: null,
      query2: null,
      page: {
        userLogin: false,
        userRegister: false,
        userShow: false,
        userEdit: false,
        charitiesSearch: true,
        charityShow: false,
        crisis: false
      }
    }
    this.getCharities = this.getCharities.bind(this)
    this.getCharity = this.getCharity.bind(this)
    this.setUser = this.setUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.changePage = this.changePage.bind(this)
    this.logOut = this.logOut.bind(this)
    this.createLike = this.createLike.bind(this)
    this.register = this.register.bind(this)
    this.createUser= this.createUser.bind(this)
    this.removeLike = this.removeLike.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.disliked = this.disliked.bind(this)
    this.liked = this.liked.bind(this)
  }
  changePage (newPage) {
    let toUpdate = {};
    for(let key in this.state.page){
      toUpdate[key] = false;
    }
    toUpdate[newPage] = true;
    this.setState({page: toUpdate })
  }
  clearBoard(){
    this.setState({
      showBoard: false,
      charities: false
    })
    console.log(this.state.showBoard)
  }
  createUser(new_user){
    // console.log("Creating new User");
    // console.log(new_user);
    fetch("/users", {
      body: JSON.stringify(new_user),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdUser => {
      return createdUser.json()
    })
    .then(jsonedUser => {
      this.loginUser(jsonedUser);
      // this.changePage("postList");
    })
    .catch(error => console.log(error));
  }
  createCrisis(new_crisis){
    fetch("/crises", {
      body: JSON.stringify(new_crisis),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdCrisis => {
      return createdCrisis.json()
    })
    .catch(error => console.log(error));
  }
  register(){
    console.log('come and register')
  }
  logOut(){
    this.setState({
      loggedUser: null
    })
  }
  removeLike(user_id, charity_id){
    fetch("/favorites/" + user_id + "/" + charity_id, {
      method: "DELETE"
    })
    .then(data => {
      this.changePage('charitiesSearch')
    })
    .catch(error => console.log(error));
  }
  disliked(charity_id){
      let new_charity_id = parseInt(charity_id, 10);
      console.log(new_charity_id)
      const new_loggedUser = this.state.loggedUser
      new_loggedUser.favorites.map((val, index) =>{
        console.log(val['id'])
         if(val['id'] == new_charity_id){
           console.log(val)
           console.log('it works')
           new_loggedUser.favorites.splice(index, 1)
           console.log(new_loggedUser.favorites)
           this.setState({
             loggedUser: new_loggedUser
           })
         }
      })
  }
  liked(charity){
      const new_loggedUser = this.state.loggedUser
      new_loggedUser.favorites.push(charity)
      console.log(new_loggedUser)

      this.setState({
        loggedUser: new_loggedUser
       })
       this.changePage('charitiesSearch')
  }
  createLike(new_like){
    fetch("/favorites", {
      body: JSON.stringify(new_like),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  })
  .then(createdLike => {
    return createdLike.json()
  })
  .catch(error => console.log(error))
  }
  getCharities(query) {
    this.setState({
      currentQuery: query
    })
    fetch("/charities/" + query)
      .then(response => response.json())
        .then(query_charities => {
          this.setState({
            charities: query_charities,
            charity: false
          })
        }).catch(error => this.setState({
          charities: false,
        }));
  }
  getCharity(query) {
    this.setState({
      currentQuery: query
    })
    fetch("/charities/find/" + query)
      .then(response => response.json())
        .then(query_charity => {
          this.setState({
            charity: query_charity
          })
        }).catch(error => this.setState({
          charity: false,
        }));
        this.changePage('charityShow')
  }
  setUser(new_user){
    if(new_user != null){
      new_user["password"] = "Nice Try";
    }
    this.setState({loggedUser: new_user});
  }
  loginUser(new_user){
    console.log(new_user)
    fetch("/users/find/'" + new_user.user_name + "'")
      .then(response => response.json())
        .then(logged_user => {
          if(new_user.password === logged_user.password){
            this.setUser(logged_user);
          } else {
            this.setState({ errorWrongPassword: true });
            console.log("Wrong Password");
          }
        }).catch(error => {
            console.log(error);
        });
        this.changePage('charitiesSearch')
  }
  render(){
    return (
    <div>
        <Nav
          changePage={this.changePage}
          openLoginForm={this.login}
          logOut={this.logOut}
          currentUser={this.state.loggedUser}
        />
        {this.state.page.charityShow ?
          <CharityShow
          charity={this.state.charity}/>
          : ''
        }
        {this.state.page.crisis ?
          <Crisis
          functionExecute={this.createCrisis}
          changePage={this.changePage}/>
          :
          ''
        }
        {
          (this.state.page.charitiesSearch == true) ?
            <Charity
              liked={this.liked}
              disliked={this.disliked}
              crisis1={this.state.crisis1}
              crisis2={this.state.crisis2}
              clearBoard={this.clearBoard}
              removeLike={this.removeLike}
              changePage={this.changePage}
              getCharity={this.getCharity}
              loggedUser={this.state.loggedUser}
              createLike={this.createLike}
              userLogin={this.state.page.userLogin} charities={this.state.charities}
              charity={this.state.charity}
              showCharity = {this.getCharity}
              functionExecute = {this.getCharities}
            />
          : ''
        }
      {
        (this.state.page.userLogin == true) ?
          <UserForm
            changePage={this.changePage}
            functionExecute={this.loginUser}
          />
        :
          ''
      }
      {
        (this.state.page.userShow == true) ?
          <UserShow
            changePage={this.changePage}
            loggedUser={this.state.loggedUser}
          />
        :
          ''
      }
      {
          this.state.page.userRegister ?
            <UserForm
              changePage={this.changePage}
              functionExecute={this.createUser}
              title="Register User"/>
          : ''
        }
      <Footer/>
    </div>
  )
  }
}



ReactDOM.render(
  <App/>,
  document.querySelector("body")
)
