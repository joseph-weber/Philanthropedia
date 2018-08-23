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
        <button onClick={()=>{this.lastPage()}}>Last</button>
        <button onClick={()=>{this.nextPage()}}>Next</button>
      </div>
    )
  }
}
