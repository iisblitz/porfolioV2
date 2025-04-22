import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
class MaintenaceText extends React.Component {
constructor(props){
  super(props)
  this.state ={ texts:{   
    a3:"",
    articles:"",
    bg:"",
    bio:"",
    ci:"",
    del:"",
    desc:"",
    description:"",
    ds:"",
    etitle:"",
    ex:"",
    experience:"",
    g:"",
    header:"",
    language:"",
    link:"",
    link2:"",
    loc:"",
    main:"",
    notes:"",
    pd:"",
    plan:"",
    pro:"",
    status:"",
    subtitle:"",
    te:"",
    ti:"",
    tools:""
  }}
  this.handleAddTexts = this.handleAddTexts.bind(this);
  this.handleDeleteTexts = this.handleDeleteTexts.bind(this);
  this.handleChangeTexts = this.handleChangeTexts.bind(this);  
  this.reset = this.reset.bind(this)
}
handleAddTexts = async (e) => {
  e.preventDefault();
  try {
    await axios.post("https://shy-erin-panther-tux.cyclic.app/texts", this.state.texts, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.reset();
    alert("Texts added successfully.");
  } catch (err) {
    console.error("Error adding texts:", err);
    alert("Failed to add texts. Please try again.");
  }
};
handleDeleteTexts = async (id) => {
  try{
      await axios.delete(`https://shy-erin-panther-tux.cyclic.app/texts/${id}`);
  }catch(err){
      console.error('Error deleting document: ', err.response.data);
  }
}
handleChangeTexts(a,b){
  const name = a
  const value= b;
  this.setState(prevState => ({texts:{...prevState.texts,[name]:value}}))
}


reset(){
  this.setState({texts:{a3:"",articles:"",bg:"",bio:"",ci:"",del:"",desc:"",description:"",ds:"",etitle:"",ex:"",experience:"",g:"",header:"",language:"",link:"",link2:"",loc:"",main:"",notes:"",pd:"",plan:"",pro:"",status:"",subtitle:"",te:"",ti:"",tools:""}})
}
  render() {
    return (
      <div className="Maintenance">
            <h1>Texts Maintenance</h1>
            <h3>Add texts</h3>
            <form>
            <div>
            <label>Language:</label><input name="language" value={this.state.texts.language} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>Main:</label><input name="main" value={this.state.texts.main} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>A3:</label><input name="a3" value={this.state.texts.main.a3} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>experience:</label><input name="experience" value={this.state.texts.experience} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>CI:</label><input name="ci" value={this.state.texts.ci} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>subtitle:</label><input name="subtitle" value={this.state.texts.subtitle} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>Description:</label><input name="description" value={this.state.texts.description} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>Bio:</label><input name="bio" value={this.state.texts.bio} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            </div>
            <div>
            Laboral:
            <label>Titulo:</label><input name="etitle" value={this.state.texts.etitle} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>fecha inicio:</label><input name="ti" value={this.state.texts.ti} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>fecha fin:</label><input name="te" value={this.state.texts.te} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>loc:</label><input name="loc" value={this.state.texts.loc} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>desc:</label><input name="desc" value={this.state.texts.desc} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>pro:</label><input name="pro" value={this.state.texts.pro} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>link:</label><input name="link" value={this.state.texts.link} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            </div>
            <div>
            Proyectos:
            <label>header:</label><input name="header" value={this.state.texts.header} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>bg:</label><input name="bg" value={this.state.texts.bg} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>pd:</label><input name="pd" value={this.state.texts.pd} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>ds:</label><input name="ds" value={this.state.texts.ds} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>g:</label><input name="g" value={this.state.texts.g} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>ex:</label><input name="ex" value={this.state.texts.ex} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>tools:</label><input name="tools" value={this.state.texts.tools} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>plan:</label><input name="plan" value={this.state.texts.plan} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>del:</label><input name="del" value={this.state.texts.del} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>status:</label><input name="status" value={this.state.texts.status} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>link2:</label><input name="link2" value={this.state.texts.link2} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            </div>
            <button type="submit" onClick={this.handleAddTexts}>Add Texts</button>
        </form>
        {this.props.loadData.texts.map(e=> (
                <div key={e.id}>
                <p>{e.language} - Language {e.id} </p> <button onClick={() => this.handleDeleteTexts(e.id)}> X </button>
                </div>
            ))}
        <button onClick={this.handleAlt}> Change forms</button>
            <Link to='../'>Return</Link>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  loadData: state.rootReducer,
});
export default connect(mapStateToProps)(MaintenaceText);