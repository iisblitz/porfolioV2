'use client'

import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  render() {
    return ( 
   <div className="Catalog">
        
        
        {this.props.loadData.catalog.filter(e => e.Language === this.props.loadData.language).map(e => (
  <Link key={e.Number} to={`/Article/${e.Number}`}>
    <div className="CategoryCard">
      <p>{e.Title}</p>
      <p>{e.Category}</p>
      <ol>{e.Keywords.split("/").map(keyword => <li key={keyword}>{keyword}</li>)}</ol>
    </div>
  </Link>
))}

        
      
     </div>
    )
  }
}
const mapStateToProps = (state) => ({
  loadData: state.rootReducer
});
export default connect(mapStateToProps)(Articles);