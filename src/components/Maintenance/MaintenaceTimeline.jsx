import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
class MaintenaceTimeline extends React.Component {
    constructor(props){
        super(props)
        this.state={timeline:{
            Language:"",
            Image:"",
            Icon:"",
            Category:"",
            Name:"",
            Location:"",
            BusinessName:"",
            Skills:"",
            BusinessDescription:"",
            JobDescription:"",
            Schedule:"",
            WorkTime:"",
            Begin:"",
            End:""}}
        this.handleAddTimeLine = this.handleAddTimeLine.bind(this);
        this.handleDeleteTimeline = this.handleDeleteTimeline.bind(this);
        this.handleChangeTimeline = this.handleChangeTimeline.bind(this);
        this.reset = this.reset.bind(this)
    }
    handleAddTimeLine = async (e) => {
        e.preventDefault();
        try {
          await axios.post("https://shy-erin-panther-tux.cyclic.app/", this.state.timeline, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("Timeline added successfully.");
          this.reset(); // Reset the form fields
          this.setState({ success: true }); // Set success state to true
          alert("Timeline added successfully."); // Show a confirmation alert
        } catch (err) {
          console.error("Error adding timeline:", err);
          this.setState({ success: false });
          alert("Failed to add timeline."); // Show a failure alert
        }
      };
    handleDeleteTimeline = async (id) => {
        try{await axios.delete(`https://shy-erin-panther-tux.cyclic.app/${id}`);
        }catch(err){console.error('Error deleting document: ', err.response.data)}
      }
    handleChangeTimeline(a,b){
          const name = a
          const value= b;
          this.setState(prevState => ({timeline:{...prevState.timeline,[name]:value}}))
      }
    
    reset(){
        this.setState({timeline:{Language:"",Image:"",Icon:"",Category:"",Name:"",Location:"",BusinessName:"",Skills:"",BusinessDescription:"",JobDescription:"",Schedule:"",WorkTime:"",Begin:"",End:""}})
    }
  render() {
    return (
<div className="Maintenance">
            <h1>Timeline Maintenance</h1>
            <h3>Add a timeline</h3>
            <form>
            <label>Language:</label><input name="Language" value={this.state.timeline.Language} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Image:</label><input name="Image" value={this.state.timeline.Image} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Icon:</label><input name="Icon" value={this.state.timeline.Icon} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Category:</label><input name="Category" value={this.state.timeline.Category} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Name:</label><input name="Name" value={this.state.timeline.Name} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Location:</label><input name="Location" value={this.state.timeline.Location} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>BusinessName:</label><input name="BusinessName" value={this.state.timeline.BusinessName} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Skills:</label><input name="Skills" value={this.state.timeline.Skills} type="list" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>BusinessDescription:</label><input name="BusinessDescription" value={this.state.timeline.BusinessDescription} type="textarea" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>JobDescription:</label><input name="JobDescription" value={this.state.timeline.JobDescription} type="textarea" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Schedule:</label><input name="Schedule" value={this.state.timeline.Schedule} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>WorkTime:</label><input name="WorkTime" value={this.state.timeline.WorkTime} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Begin:</label><input name="Begin" value={this.state.timeline.Begin} type="date" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>End:</label><input name="End" value={this.state.timeline.End} type="date" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <button type="submit" onClick={this.handleAddTimeLine}>Add Timeline Event</button>
            </form>
            {this.props.loadData.time.map(e=> (
                <div key={e.id}>
                <p>{e.id} - job - {e.Name}  </p> <button onClick={() => this.handleDeleteTimeline(e.id)}> X </button>
                </div>
            ))}
  
            <Link to='../'>Return</Link>
        </div>
        )
  }
}
const mapStateToProps = (state) => ({
    loadData: state.rootReducer,
  });
  export default connect(mapStateToProps)(MaintenaceTimeline);
