class UserForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    const new_user = {
    user_name: this.refs.username.value,
    password: this.refs.password.value
    }
    this.props.functionExecute(new_user);
  }
  render(){
    return(
      <div className="userformPage">
        <form className="userform" onSubmit={this.handleSubmit}>
        <h1>Enter User Info Below</h1>
          <input className="input is-primary" ref="username" type="text" placeholder="username"/>
          <input className="input is-primary" ref="password" type="password" placeholder="password"/>
          <input className="button is-primary" type="submit" value="submit answer"/>
        </form>
      </div>
    )
  }
}
