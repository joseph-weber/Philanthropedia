class PaginationButtons extends React.Component {
  constructor(props){
    super(props)
  }
  lastPage(){
    console.log('last page')
    this.props.pageChange('last')
  }
  nextPage(){
    console.log('next page')
    this.props.pageChange('next')
  }
  render(){
    return (
      <div className="paginationButton">
        {this.props.page == 1 ?
          ''
          :
        <button
        className="button is-danger" onClick={()=>{this.lastPage()}}>Last</button>
      }
      {this.props.charities.length != 0 ?
        <div>
          <button
          className="button is-primary" onClick={()=>{this.nextPage()}}>Next</button>
        </div>
        :
        ''
        }
      </div>
    )
  }
}
