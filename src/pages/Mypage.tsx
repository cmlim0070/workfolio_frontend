import "../css/Mypage.scss";
import Nav from '../component/Nav';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Mypage() {
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
export default Mypage;