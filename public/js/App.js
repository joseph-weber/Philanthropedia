class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      charities: null
    }
    this.getCharities = this.getCharities.bind(this)
  }
  getCharities(query) {
    fetch("/charities/" + query)
      .then(response => response.json())
        .then(query_charities => {
          console.log(query_charities)
          this.setState({
            charities: query_charities
          })
          console.log(this.state)
        }).catch(error => console.log(error));
  }
  render(){
    return (
    <Charity charities={this.state.charities} functionExecute = {this.getCharities}/>
  )
  }
}



ReactDOM.render(
  <App/>,
  document.querySelector("body")
)
