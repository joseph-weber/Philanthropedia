class UserForm extends React.Component {
  constructor(props){
    super(props)
  }
  handleSubmit(event){

  }
  render(){
    return(
      <div className="nav">
        <form onSubmit={this.handleSubmit}>
          <input className="input is-primary" ref="username" type="text" placeholder="username"/>
          <input className="input is-primary" ref="password" type="password" placeholder="password"/>
          <input className="button is-primary" type="submit" value="submit answer"/>
        </form>
      </div>
    )
  }
}
