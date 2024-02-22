import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import "../css/Calander.scss";
import Nav from '../component/Nav';
import Header from '../component/Header';
import Footer from '../component/Footer';

// 타이틀 부분의 경우 사용자 임의 수정 가능하게끔 변경
// 캘린더 자체를 컴포넌트로 따로 빼야하는지 고민해보기

function Section() {
    return (
        <div className="section-wrapper">
            <div className="section-box">
                <div className="section-title">
                    <h1>내 캘린더</h1>
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
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
                </div>
            </div>
        </div>
    );
}

function Calander() {
    return (
        <div className="window">
            <Header></Header>
            <Nav></Nav>
            <Section></Section>
        </div>
    );
}
export default Calander;