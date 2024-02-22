import "../css/Community.scss";
import Nav from '../component/Nav';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Postcard() {

}

function Section() {
    return (
        <div className="section-wrapper">
            <div className="section-box">
                <div className="section-title">
                    <h1>커뮤니티</h1>
                    <div className="section-title-icon">
                        <div className="section-title-icon-square">
                            <span className="material-symbols-outlined">edit_square</span>
                        </div>
                        <div className="section-title-icon-square">
                            <span className="material-symbols-outlined">share</span>
                        </div>
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
        </div>
    );
}


function Community() {
    return (
        <div className="window">
        <Nav></Nav>
        <Header></Header>
        <Section></Section>
    </div>
    );
}
export default Community;