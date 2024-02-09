import "../css/Header.scss";

// 샘플 이미지
import profileimg from '../assests/profile_img_sample.png';


function Header(){
    return(
        <div className="header">
            <div className="header-quickbar">
                <ul className="quickbar-list">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="material-symbols-outlined">calendar_month</span>
                </ul>
            </div>
            <div className="header-profile">
                <div className="profile-list">
                    {/* 추후 프로필 데이터에서 이름 가져옴 */}
                    <div className="header-profile-name">
                        이유림
                    </div>
                    {/* 추후 프로필에서 이미지 받아옴 */}
                    <div className="header-profile-img">
                        <img
                        className="profile-img"
                        src={profileimg}
                        />
                    </div>
                    <span className="material-symbols-outlined">expand_more</span>
                </div>
            </div>
    </div>
    );
}

export default Header;