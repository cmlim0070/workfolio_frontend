import "../css/Nav.scss";
import { Link } from 'react-router-dom';

function Nav(){
    return (
    
        <div className="nav-wrapper">
            <div className="side-bar">
            {/* 로고 부분
                추후 이미지 삽입
            */}
        <div className="logo-name-wrapper">
            <div className="logo-name">
            <span className="material-symbols-outlined">
                pets
            </span>
            </div>
            <button className="logo-name__button">
                <i
                    className="bx bx-arrow-from-right logo-name__icon"
                    id="logo-name__icon"
                ></i>
                <div className="title-workfolio">
                Workfolio
                </div>
            </button>
            <span className="material-symbols-outlined">
            keyboard_double_arrow_left
            </span>
        </div>

        <ul className="features-list">
            <li className="features-item inbox active">
                <Link to="/">
                <span className="status"></span>
                <span className="material-symbols-outlined">home</span>
                <span className="features-item-text">Home</span>
                <span className="tooltip">Home</span>
                </Link>
            </li>
            <li className="features-item draft">
                <Link to="/Calander">
                <span className="material-symbols-outlined">calendar_month</span>
                <span className="features-item-text">Calander</span>
                <span className="tooltip">Calander</span>
                </Link>
            </li>
            <li className="features-item trash">
                <Link to="/TodoDetail">
                <span className="material-symbols-outlined">checklist</span>
                <span className="features-item-text">Todo</span>
                <span className="tooltip">Todo</span>
                </Link>
            </li>
            <li className="features-item star">
                <Link to="/Community">
                <span className="material-symbols-outlined">sms</span>
                <span className="features-item-text">Community</span>
                <span className="tooltip">Community</span>
                </Link>
            </li>
            <li className="features-item sent">
                <Link to="/Mypage">
                <span className="material-symbols-outlined">person</span>
                <span className="features-item-text">Mypage</span>
                <span className="tooltip">Mypage</span>
                </Link>
            </li>
        </ul>
        
        <ul className="features-list">
            <li className="features-item inbox active">
                <Link to="/Portfolio">
                <span className="status"></span>
                <span className="material-symbols-outlined">Resume</span>
                <span className="features-item-text">Portfolio</span>
                <span className="tooltip">Portfolio</span>
                </Link>
            </li>
            <li className="features-item draft">
                <Link to="/Interview">
                <span className="material-symbols-outlined">Resume</span>
                <span className="features-item-text">Interview</span>
                <span className="tooltip">Interview</span>
                </Link>
            </li>
            <li className="features-item trash">
                <Link to="/Resume">
                <span className="material-symbols-outlined">Resume</span>
                <span className="features-item-text">Resume</span>
                <span className="tooltip">Resume</span>
                </Link>
            </li>
        </ul>

        {/* <ul className="chat-list">
            <div className="chat-header">recent chats</div>
            <button className="chat-new-btn">
            <i className="bx bxs-plus-circle chat-icon"></i>
            <span className="chat-new-btn-text">Start New Chat</span>
            <span className="tooltip">New Chat</span>
            </button>

            <li className="chat-item">
            <span className="chat-item-avatar-wrapper has-message">
                <img
                src="./assets/images/chris-evans.jpg"
                alt="avatar"
                className="chat-item-avatar"
                />
            </span>
            <span className="chat-item-name">Steve Rogers</span>
            <span className="chat-item-number">53</span>
            </li>
            <li className="chat-item">
            <span className="chat-item-avatar-wrapper">
                <img
                src="./assets/images/tony-stark.jpg"
                alt="avatar"
                className="chat-item-avatar"
                />
            </span>
            <span className="chat-item-name">Tony Stark</span><span
                className="chat-item-status"
            ></span>
            </li>
        </ul> */}
            </div>
        </div>
    
    );
}


export default Nav;