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
          <h1><a href="http://joseph-weber.github.io">My Github</a></h1>
          <h1><a href="www.reddit.com/r/birdswitharms">Birds with Arms</a></h1>
        </div>
        <div>
          <h1>A Joseph Weber Joint</h1>
        </div>
        <div>
          <h1>Made with Love</h1>
          <h1>CV</h1>
        </div>
      </div>
    )
  }
}
