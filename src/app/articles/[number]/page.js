'use client'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from '../../../components/Welcome'
import { Link } from 'react-router-dom';
class Articles extends Component {
    constructor(props){
        super(props)
        this.state = {
          Language: "ESP"
        }
    }
    componentDidMount(){   
    }
  render() {
    return (
      <div>
        <Welcome/>
      {this.props.loadData.filter(e=>e.Language === this.state.Language).map(e=>
        <div key={e.Title} className='fullArt'>
        <p>{e.Title}</p>
        <p>{e.Category}</p>
        <p>{e.Date}</p>

        <div className='Arts'>
        <div className='ArtLists'>
        <ol>
          {e.Keywords.split("/").map(e=><li>{e}</li>)}
        </ol>
        <ol>
          {e.Skills.split("/").map(e=><li>{e}</li>)}
        </ol>
        </div>

        <div className='ArtText'>
        <p>{e.Background}</p>
        {e.Body.split("*").map(e=><p>{e}</p>)}
        <p>{e.Lessons}</p>
        {e.AfterThoughts.split("*").map(e=><p>{e}</p>)}
        </div>
        </div>
        <Link to="../">
{this.props.loadData.Language === 'ESP' ? 'Regresar' : 'Go Back'}
</Link>
        </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadData: state.rootReducer.catalog
});
export default connect(mapStateToProps)(Articles);