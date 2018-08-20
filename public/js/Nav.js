class Nav extends React.Component {
  constructor(props){
    super(props)
  }
    login(){
      console.log('hi')
    }
  render(){
    return(
      <div className="nav">
        <h1><img src="p2.png"/>hilathropedia</h1>
        <h1 onClick={()=>{this.login()}}>Log-in</h1>
        <h1>Fieri</h1>
        <h1>Fan</h1>
      </div>
    )
  }
}
