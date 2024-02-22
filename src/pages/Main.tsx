import React, { useState } from "react";
import "../css/Main.scss";

import Nav from '../component/Nav';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Todo_card() {
    return (

        // 데이터 받아와서 넣어줘야 함

        <div className="todo-card">
            <div className="todo-card-content">
                <div className="todo-card-time-square">
                    <div className="todo-card-content-time">
                        8:00
                    </div>
                </div>
                <div className="todo-card-content-title">
                    Brainstorming
                </div>
                <div className="todo-card-content-desc">
                    브레인스토밍을 한다.
                </div>
            </div>
        </div>
    );
}

function Section() {
    return (
        <div className="section-wrapper">
            <div className="section-box">
                <div className="section-title">
                    <h1>마이 워크스페이스</h1>
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
                    <div className="section-todo">
                        <div className="box-wrapper">
                            <div className="box-desc">
                                <span className="material-symbols-outlined">circle</span>
                                <div className="box-title">To do</div>
                            </div>

                            {/* 추후 컴포넌트로 분리
                            ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
                                투두 / 게시글 등등
                                <Card>
                            */}

                            <div className="todo-list">
                                <Todo_card></Todo_card>
                                <Todo_card></Todo_card>
                            </div>

                        </div>
                    </div>
                    <div className="section-calander">
                        <div className="box-wrapper">
                            <div className="box-desc">
                                <span className="material-symbols-outlined">circle</span>
                                <div className="box-title">Calander</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Main() {

    return (
            <div className="window">
                <Header></Header>

                <div className="window-2">
                    <Nav></Nav>
                    
                    <Section></Section>
                    {/* <Footer></Footer> */}
                </div>

                
            </div>
    );
}
export default Main;