class UserForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    console.log('mogli')
    const new_user = {
    user_name: this.refs.username.value,
    password: this.refs.password.value
    }
    this.props.functionExecute(new_user);
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
