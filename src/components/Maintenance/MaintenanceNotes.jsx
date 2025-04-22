import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class MaintenanceNotes extends React.Component {
    constructor(props){
        super(props)
        this.state= {notes:{
            Language:"",
            Title:"",
            Category:"",
            HeaderImage:"",
            SDescription:"",
            Key:"",
            Definition:"",
            Summary:""}
        }
        this.reset= this.reset.bind(this)
        this.handleAddNotes= this.handleAddNotes.bind(this)
        this.handleDeleteNotes = this.handleDeleteNotes.bind(this)
        this.handleChangeNotes = this.handleChangeNotes.bind(this)
    }
    handleAddNotes = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://shy-erin-panther-tux.cyclic.app/notes", this.state.notes, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          
          console.log("Note added successfully. Response:", response);
          this.reset();
          this.setState({ success: true });
          alert("Note added successfully.");
        } catch (error) {
          console.error("Error adding Note:", error);
          this.setState({ success: false });
          alert("Failed to add Note.");
        }
      };    
      handleDeleteNotes = async (id) => {
        try{
            await axios.delete(`https://shy-erin-panther-tux.cyclic.app/notes/${id}`);
        }catch(err){
            console.error('Error deleting document: ', err.response.data);
        }
      }
      handleChangeNotes(a,b){
          const name = a
          const value= b;
          this.setState(prevState => ({notes:{...prevState.notes,[name]:value}}))
      }
    reset(){
        this.setState({notes:{
        Language:"",
        Title:"",
        Category:"",
        HeaderImage:"",
        SDescription:"",
        Key:"",
        Definition:"",
        Summary:""}})
    }
  render() {
    return (
        <div className="Maintenance">
        <h1>Catalog Maintenance</h1>
        <h3>Add an Notes</h3>
        <form>
        <label>Language:</label><input name="Language" value={this.state.notes.Language} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />
        <label>Title:</label><input name="Title" value={this.state.notes.Title} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />
        <label>Category:</label><input name="Category" value={this.state.notes.Category} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />
        <label>HeaderImage:</label><input name="HeaderImage" value={this.state.notes.HeaderImage} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />
        <label>SDescription:</label><input name="SDescription" value={this.state.notes.SDescription} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />
        <label>Key:</label><input name="Key" value={this.state.notes.Key} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />
        <label>Definition:</label><input name="Definition" value={this.state.notes.Definition} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />
        <label>Summary:</label><input name="Summary" value={this.state.notes.Summary} type="text" onChange={(e)=> this.handleChangeNotes(e.target.name, e.target.value)} />  
        <button type="submit" onClick={this.handleAddNotes}>Add Note</button>
        </form>        
    {this.props.loadData.notes.map(e=> (
        <div key={e.id}>
        <p>{e.id} - Notes - {e.Title}  </p> <button onClick={() => this.handleDeleteNotes(e.id)}> X </button>
        </div>
    ))}
    <Link to='./'>Return</Link>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer,
  });
  export default connect(mapStateToProps)(MaintenanceNotes);