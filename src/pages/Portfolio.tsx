import "../css/Portfolio.scss";
import Nav from '../component/Nav';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Portfolio() {
    return (
        <div className="window">
        <Nav></Nav>
        <div className="window-right">
            <Header></Header>
            {/* <Footer></Footer> */}
        </div>
    </div>
    );
}
export default Portfolio;