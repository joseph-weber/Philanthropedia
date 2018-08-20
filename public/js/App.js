class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedUser: null,
      charities: false,
      lastFavorite: {},
      page: {
        userLogin: false,
        userRegister: false,
        userShow: false,
        userEdit: false,
        charitesSearch: true
      }
    }
    this.getCharities = this.getCharities.bind(this)
    this.setUser = this.setUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.login = this.login.bind(this)
    this.changePage = this.changePage.bind(this)
    this.logOut = this.logOut.bind(this)
    this.createLike = this.createLike.bind(this)
  }
  changePage (newPage) {
    let toUpdate = {};
    for(let key in this.state.page){
      toUpdate[key] = false;
    }
    toUpdate[newPage] = true;
    this.setState({page: toUpdate })
  }
  login(){
    this.setState({
      page: {
        userLogin: true,
        userRegister: false,
        userShow: false,
        userEdit: false,
        charitesSearch: true
      }
    })
  }
  logOut(){
    this.setState({
      loggedUser: null
    })
  }
  createLike(new_like){
    console.log(new_like)
    console.log(new_like)
    fetch("/favorites", {
      body: JSON.stringify(new_like),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdLike => {
      console.log('createLike')
      console.log(createdLike)
      return createdLike.json()
    })
    .catch(error => console.log(error))
  }
  getCharities(query) {
    fetch("/charities/" + query)
      .then(response => response.json())
        .then(query_charities => {
          this.setState({
            charities: query_charities
          })
          console.log(this.state)
        }).catch(error => this.setState({
          charities: false
        }));
  }
  setUser(new_user){
  if(new_user != null){
    new_user["password"] = "Nice Try";
  }
  this.setState({loggedUser: new_user});
  console.log(this.state.loggedUser)
}
  loginUser(new_user){
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
      <Charity
      loggedUser={this.state.loggedUser}
      createLike={this.createLike}
      userLogin={this.state.page.userLogin} charities={this.state.charities} functionExecute = {this.getCharities}/>
      {
        (this.state.loggedUser == null && this.state.page.userLogin == true) ?
        <UserForm
        changePage={this.changePage}
        functionExecute={this.loginUser}
        />
        :
        ''
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
