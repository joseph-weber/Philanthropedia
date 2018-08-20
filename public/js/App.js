class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedUser: null,
      charities: false,
      page: {
        userLogin: false,
        userRegister: false,
        userShow: false,
        userEdit: false,
        postList: true,
        postShow: false,
        postForm: false,
        postEdit: false

      }
    }
    this.getCharities = this.getCharities.bind(this)
    this.setUser = this.setUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
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
  }
  render(){
    return (
    <div>
      <Nav/>
      <Charity charities={this.state.charities} functionExecute = {this.getCharities}/>
      <Footer/>
      <UserForm functionExecute={this.loginUser}/>
    </div>
  )
  }
}



ReactDOM.render(
  <App/>,
  document.querySelector("body")
)
