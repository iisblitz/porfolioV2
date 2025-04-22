import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
class MaintenanceArticles extends React.Component {
  constructor(props){
    super(props)
    this.state= {article:{
      Langauge:"",
      number:"",
      Title:"",
      Education:"",
      Work:"",
      Location:"",
      Logo:"",
      ShortDescription:"",
      ProblemDescription:"",
      DesiredState:"",
      Goals:"",
      TimeConstraints:"",
      Plan:"",
      Tools:"",
      Status:"",
      Image:"",
      Deliverable:"",
      Color:"" 
        } 
    }
    this.handleAddArticle = this.handleAddArticle.bind(this);
    this.handleDeleteArticles = this.handleDeleteArticles.bind(this);
    this.handleChangeArticle = this.handleChangeArticle.bind(this);
    this.reset = this.reset.bind(this)
  }

  handleAddArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://shy-erin-panther-tux.cyclic.app/art", this.state.article, {
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
  handleDeleteArticles = async (id) => {
    try{
        await axios.delete(`https://shy-erin-panther-tux.cyclic.app/art/${id}`);
    }catch(err){
        console.error('Error deleting document: ', err.response.data);
    }
  }
  handleChangeArticle(a,b){
      const name = a
      const value= b;
      this.setState(prevState => ({article:{...prevState.article,[name]:value}}))
  }
  reset(){
    this.setState({article:{Langauge:"",number:"",Title:"",Education:"",Work:"",Location:"",Logo:"",ShortDescription:"",ProblemDescription:"",DesiredState:"",Goals:"",TimeConstraints:"",Plan:"",Tools:"",Status:"",Image:"",Deliverable:""}})
    }
    render() {
    return (
      <div className="Maintenance">
      <h1>Articles Maintenance</h1>
      <h3>Add an Project</h3>
      <form>
      <label>Langauge:</label><input name="Langauge" value={this.state.article.Langauge} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>number:</label><input name="number" value={this.state.article.number} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Title:</label><input name="Title" value={this.state.article.Title} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Education:</label><input name="Education" value={this.state.article.Education} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Work:</label><input name="Work" value={this.state.article.Work} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Location:</label><input name="Location" value={this.state.article.Location} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Logo:</label><input name="Logo" value={this.state.article.Logo} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>ShortDescription:</label><input name="ShortDescription" value={this.state.article.ShortDescription} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>ProblemDescription:</label><input name="ProblemDescription" value={this.state.article.ProblemDescription} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>DesiredState:</label><input name="DesiredState" value={this.state.article.DesiredState} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Goals:</label><input name="Goals" value={this.state.article.Goals} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>TimeConstraints:</label><input name="TimeConstraints" value={this.state.article.TimeConstraints} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Plan:</label><input name="Plan" value={this.state.article.Plan} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Tools:</label><input name="Tools" value={this.state.article.Tools} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Status:</label><input name="Status" value={this.state.article.Status} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Image:</label><input name="Image" value={this.state.article.Image} type="url" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Deliverable:</label><input name="Deliverable" value={this.state.article.Deliverable} type="url" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <label>Color:</label><input name="Color" value={this.state.article.Color} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
      <button type="submit" onClick={this.handleAddArticle}>Add Timeline Event</button>
      </form>
      {this.props.loadData.arts.map(e=> (
          <div key={e.id}>
          <p>{e.id} - Project - {e.Title}  </p> <button onClick={() => this.handleDeleteArticles(e.id)}> X </button>
          </div>
      ))}
      <button onClick={this.handleAlt}> Change forms</button>
      <Link to='./'>Return</Link>
      </div>      
    )
  }
}
const mapStateToProps = (state) => ({
  loadData: state.rootReducer,
});
export default connect(mapStateToProps)(MaintenanceArticles);