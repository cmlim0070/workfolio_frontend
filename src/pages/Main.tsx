import React, { useState } from "react";
import "../css/Main.scss";

import Nav from '../component/Nav';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Todo_card() {
    return (
        <div className="todo-card">
                                    
        </div>
    );
}

function Section() {
    return (
        <div className="section-wrapper">
            <div className="section-box">
                <div className="section-title">
                    <h1>마이 워크스페이스</h1>
                </div>
                <div className="content">
                    <div className="section-todo">
                        <div className="todo-wrapper">
                            <div className="todo-desc">
                                <span className="material-symbols-outlined">circle</span>
                                <div className="todo-title">To do</div>
                            </div>

                            {/* 추후 컴포넌트로 분리
                            ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
                                투두 / 게시글 등등
                                <Card>
                            */}

                            <div className="todo-content">
                                <Todo_card></Todo_card>
                            </div>

                        </div>
                    </div>
                    <div className="section-calander">
                        <span className="material-symbols-outlined">circle</span>
                        <div className="calander-title">Calander</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Main() {

    return (
            <div className="window">
                <Nav></Nav>
                <div className="window-right">
                    <Header></Header>
                    <Section></Section>
                    {/* <Footer></Footer> */}
                </div>
            </div>
    );
}
export default Main;