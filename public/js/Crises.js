class Crises extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    // this.changePage("pageUserRegister");
    ReactDOM.findDOMNode(this).scrollTop = 0;
    this.props.loadCrises();
  }
  getCharities(crisis_city, crisis_zip, crisis_state, crisis_category){
    let zip;
    let city;
    let state;
    let category;
    if(crisis_zip){
      zip = '&zip=' + crisis_zip
    } else {
      zip = ''
    }
    if(crisis_city){
      city = '&city=' + crisis_city
    } else {
      city = ''
    }
    if(crisis_state){
      state = '&state=' + crisis_state
    } else {
      state = ''
    }
      if(crisis_category > 0){
        category = '&categoryID=' + crisis_category
        console.log(category)
      } else {
         category = ''
      }
    const query = category + zip + city + state
    this.props.getCharities(query)
    this.props.changePage('charitiesSearch')
  }
  render(){
    return (
      <div className="container">
      <div className="crisisTitle">
        <h1>Current Crises</h1>
      </div>
      {this.props.crises ?
        <div className="crises">
          {this.props.crises.map((crisis, index)=>
          {
            return (
            <div onClick={()=>{this.getCharities(crisis.city, crisis.zip, crisis.state, crisis.category)}} className="crisis">
            {crisis.crisis_name ?
              <h1>{crisis.crisis_name}</h1>
              :
              ''
            }
            {crisis.city ?
              <h1>{crisis.city}</h1>
              :
              ''
            }
            {crisis.zip ?
              <h1>{crisis.zip}</h1>
              :
              ''
            }
            {crisis.state ?
              <h1>{crisis.state}</h1>
              :
              ''
            }
            </div>
            )
          }
        )}
        </div>
      :
      ''
    }
    </div>
    )
  }
}
