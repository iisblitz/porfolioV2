import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Work: true,
      Hobbies: false,
      Education: false,
      Language: "ENG"
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (event) => {
    const propertyName = event.currentTarget.value;
    this.setState((prevState) => ({
      [propertyName]: !prevState[propertyName]
    }));

  };
  render() {
    this.props.loadData.time.map(e=> e.End === "0001-01-01"? e.End = "Actual": e.End)
    return (
<div className="Timeline-Window">
        <div className="TL-Menu">
          <button key="1" onClick={(event)=>this.handleToggle(event)} value={this.props.loadData.language==="ESP"? "Trabajo":"Work"} className='TL-MenuB'>
            <i className="fa-solid fa-industry" /><p>{this.props.loadData.language==="ESP"? "Experiencias Laborales":"Work Experiences"}</p>
          </button>
          <button key="2" onClick={(event)=>this.handleToggle(event)} value={this.props.loadData.language==="ESP"? "Educación":"Education"} className='TL-MenuB'>
            <i className="fa-solid fa-school" /><p>{this.props.loadData.language==="ESP"? "Eduación":"Education"}</p>
          </button>      
          <button key="3" onClick={(event)=>this.handleToggle(event)} value={this.props.loadData.language==="ESP"? "Pasa tiempos":"Hobbies"} className='TL-MenuB'>
            <i className="fa-solid fa-person-walking-luggage" /><p>{this.props.loadData.language==="ESP"? "Pasa tiempos":"Hobbies"}</p>
          </button>
        </div>
        <div className='VTL'>
                <VerticalTimeline>
        {this.props.loadData && this.props.loadData.time.filter(e=> this.state[e.Category]===true).filter(e=> e.Language === this.props.loadData.language).sort((a, b) => new Date(b.Begin) - new Date(a.Begin)).map(e => (
           <VerticalTimelineElement 
              key={e.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={e.Begin + ' / ' + e.End}
              iconStyle={{
                background: 'rgb(0,0,0)',
                color: '#FFF',
                textAlign: 'center',
                display: 'flex',
                itemAlign: 'center',
              }}
              icon={<i className={e.Icon}></i>}>              
                <Link className="TL-container" to={`/Work/${e.BusinessName}`}>
                  <div className="TL-img">
                  <img src={e.Image} alt="resource loading" />
                  </div>
                  <div className="TL-Text">
                  <h3 className="vertical-timeline-element-title">{e.Name}</h3>
                  <h3 className="vertical-timeline-element-subtitle">{e.BusinessName}</h3>
                  <p className="vertical-timeline-element-subtitle">{e.Location}</p>
                  <p>{e.BusinessDescription}</p>
                  </div>
                </Link>
            </VerticalTimelineElement>
      ))}
      </VerticalTimeline>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadData: state.rootReducer
});
export default connect(mapStateToProps)(Timeline);