class Charity extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      zip: null
    }
  }
  render(){
    return (
    <div>
      <h1>Not hello World</h1>
      <button onClick={this.giveCharity}>hi</button>
      <form onSubmit={this.giveCharity}>
        <input ref="city" type="text" placeholder="city"/>
        <input ref="zip" type="text" placeholder="zip"/>
        <input ref="state" type="text" placeholder="state"/>
        <input type="submit" value="submit answer"/>
      </form>
    </div>
  )
  }
}
