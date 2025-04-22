import {connect} from 'react-redux'
import React from 'react';

class Footer extends React.Component{
    constructor(props) {
        super(props)
        this.state={
        texts:[],
        language:"",
        loading:true
        }
    }   
        componentDidMount(){
            const { language, texts } = this.props.loadData;
            this.setState({ language, texts, loading: false });
        }
        render(){
            if(this.state.loading){
                return <div>...Loading</div>
            }
            else{
                return(
                    <div className='Footer'>
                        <p>{this.props.loadData.language === "ESP"? "No soy dueño de ninguno de los logotipos de la sección de experiencia": "I do not own any of the logos from the timeline section"}</p>
                    </div>
                )}}
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps)(Footer);