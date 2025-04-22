import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Head from 'next/head';

class Notes extends React.Component {
 
  render() {
    return (
      
      <div className='NotesCat'>
           <Head title={"Notes"} desciption={"Notes taken of articles, lessons and certifications"} type={"Lessons catalog"}/>
        {this.props.loadData.notes.filter(e => e.Language=== this.props.loadData.language).map(e=> 
          <Link to={`/Study/${e.Number}`}>
          <div>
            <p>{e.Title}</p>
            <p>{e.Category}</p>
            <p>{e.HeaderImage}</p>
            <p>{e.SDescription}</p>
          </div>
          </Link>
          )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadData: state.rootReducer
});

export default connect(mapStateToProps)(Notes);