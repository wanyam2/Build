import React from 'react';

function Home() {
    const getId = localStorage.getItem("Id");
    const getPwd = localStorage.getItem("password");

    return (
        <div>
            <h2>회원 정보</h2>
            <p>ID: {getId}</p>
            <p>Password: {getPwd}</p>
        </div>
    );
}

export default Home;
