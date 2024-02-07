/*
소셜 로그인
구글 카카오 네이버
{
”email”:”dahee@gmail.com”
”userpw”:”1234”
}
*/

import React, { useState } from "react";
import "../css/Login.scss";

function Login() {
    
    return (
        <div className = "window-login">
            <div className="box-login">
                <h3 className="text-login">Login</h3>
                    {/* 링크 어디로 연결? */}
                    <form action="/login" method="POST" encType="multipart/form-data">
                        <div className="wrapper">
                            <a href="" className="button button--facebook">Login With Facebook</a>
                            <a href="" className="button button--google">Login With Google</a>
                        </div>      
                    </form>
            </div>
      </div>
    );
}
export default Login;