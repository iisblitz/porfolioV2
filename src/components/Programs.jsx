import React from "react";
import Head from 'next/head';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.CardsRef = props.loadData.arts.map(() => React.createRef());
    }
    componentDidMount() {
        window.addEventListener('scroll', this.checkCards);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkCards);
    }

    checkCards = () => {
        const triggerBottom = window.innerHeight / 5 * 3;
        this.CardsRef.forEach(cardRef => {
            const card = cardRef.current;
            if (card) {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < triggerBottom) {
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                }
            }
        });
    };
    render() {
        return (
            <div>
            <Head title={"Projects"} desciption={"Projects in catalog"} type={"Project catalog"}/>
                <div className="proDisplay">
                    {this.props.loadData.arts.filter(e => e.Langauge === this.props.loadData.language).map((e, index) =>
                    (
                        <div key={e.id} className={`Card ${e.Color}`} ref={this.CardsRef[index]}>
                            <Link to={`/Project/${e.number}`} className={`proCards`}>
                                <div className="P-img">
                                    <img src={e.Logo} alt="workLogo" />
                                </div>
                                <div className="texts">
                                    <h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].del}: {e.Title}</h3>
                                    <p>{this.props.loadData.language === "ESP" ? "Negocio" : "Project for"}: {e.Work}</p>
                                    <p>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].desc}: {e.ShortDescription}</p>
                                    <p>{this.props.loadData.language === "ESP" ? "Duración" : "Duration"}: {e.TimeConstraints}</p>
                                </div>
                                    <div className={`BOK`}>
                                    <h3>{e.Education}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div>
                    <Link to="Maintenance">SO</Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps)(Programs);