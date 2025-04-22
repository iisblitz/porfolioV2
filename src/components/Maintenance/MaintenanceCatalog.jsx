import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
class MaintenanceCatalog extends React.Component {
    constructor(props){
        super(props)
        this.state= {catalog:{
            Language:"",
            Number:"",
            Date:new Date(),
            Title:"",
            Keywords:"",
            Background:"",
            Body:"",
            Lessons:"",
            AfterThoughts:""}
            }
        this.reset = this.reset.bind(this);
        this.handleAddCatalog = this.handleAddCatalog.bind(this);
        this.handleDeleteCatalog = this.handleDeleteCatalog.bind(this)
        this.handleChangeCatalog = this.handleChangeCatalog.bind(this)
    }
    handleAddCatalog = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://shy-erin-panther-tux.cyclic.app/catalog", this.state.catalog, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("Article added successfully. Response:", response);
          this.reset();
          this.setState({ success: true });
          alert("Article added successfully.");
        } catch (error) {
          console.error("Error adding article:", error);
          this.setState({ success: false });
          alert("Failed to add article.");
        }
      };    
      handleDeleteCatalog = async (id) => {
        try{
            await axios.delete(`https://shy-erin-panther-tux.cyclic.app/catalog/${id}`);
        }catch(err){
            console.error('Error deleting document: ', err.response.data);
        }
      }
        handleChangeCatalog(a,b){
          const name = a
          const value= b;
          this.setState(prevState => ({catalog:{...prevState.catalog,[name]:value}}))
      }

    reset() {
        this.setState({catalog:{
        Number:"",
        Language:"",
        Title:"",
        Keywords:"",
        Background:"",
        Body:"",
        Lessons:"",
        AfterThoughts:""}})
    }
  
    render() {
    return (

        <div className="Maintenance">
            <h1>Catalog Maintenance</h1>
            <h3>Add an Article</h3>
            <form>
                <label>Language:</label><input name="Language" value={this.state.catalog.Language} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Number:</label><input name="Number" value={this.state.catalog.Number} type="integer" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Category:</label><input name="Category" value={this.state.catalog.Category} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Date:</label><input name="Date" value={this.state.catalog.Date} type="Date" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Title:</label><input name="Title" value={this.state.catalog.Title} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Keywords:</label><input name="Keywords" value={this.state.catalog.Keywords} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Skills:</label><input name="Skills" value={this.state.catalog.Skills} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Background:</label><input name="Background" value={this.state.catalog.Background} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Body:</label><input name="Body" value={this.state.catalog.Body} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>Lessons:</label><input name="Lessons" value={this.state.catalog.Lessons} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
                <label>After Toughts:</label><input name="AfterThoughts" value={this.state.catalog.AfterThoughts} type="text" onChange={(e)=> this.handleChangeCatalog(e.target.name, e.target.value)} />
            <button type="submit" onClick={this.handleAddCatalog}>Add Article to catalog</button>
            </form>        
        {this.props.loadData.catalog.map(e=> (
            <div key={e.id}>
            <p>{e.id} - Article - {e.Title}  </p> <button onClick={() => this.handleDeleteCatalog(e.id)}> X </button>
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
  export default connect(mapStateToProps)(MaintenanceCatalog);