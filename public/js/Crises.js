class Crises extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    // this.changePage("pageUserRegister");
    this.props.loadCrises();
  }
  render(){
    return (


      <h1>hello</h1>
    )
  }
}
