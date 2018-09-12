class Footer extends React.Component {
  constructor(props){
    super(props)
  }
    footer(){
      console.log('hi')
    }
  render(){
    return(
      <div className="footer">
        <div>
          <h1><a href="http://joseph-weber.github.io">My Portfolio</a></h1>
          <h1><a href="https://github.com/joseph-weber">My Github</a></h1>
        </div>
        <div>
          <h1>A Joseph Weber Joint</h1>
        </div>
        <div>
        <h1>Data Provided By:</h1>
          <a href="https://www.CharityNavigator.org">Charity Navigator</a>
        </div>
      </div>
    )
  }
}
