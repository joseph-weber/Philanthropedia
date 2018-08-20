class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
  render(){
    return (
    <div>
      <Nav/>
      <Charity charities={this.state.charities} functionExecute = {this.getCharities}/>
      <Footer/>
      <UserForm/>
    </div>
  )
  }
}



ReactDOM.render(
  <App/>,
  document.querySelector("body")
)
