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
    this.hello = this.hello.bind(this)
  }
  hello(){
    console.log(this.state.loggedUser)
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
  console.log(this.state)
  console.log('this is where logged user should be')
  }
  render(){
    return (
    <div>
      <Nav/>
      <Charity charities={this.state.charities} functionExecute = {this.getCharities}/>
      <Footer/>
      <UserForm functionExecute={this.setUser}/>
    </div>
  )
  }
}



ReactDOM.render(
  <App/>,
  document.querySelector("body")
)
