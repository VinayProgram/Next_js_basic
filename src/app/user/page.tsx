"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
    const [form, setform] = useState({
        Email: "",
        Password: "",
        Username:""
    });
    const Login=async()=>{
        var data=await fetch('/api/user',{method:'post',headers:{"content-type":"appliction/json"},body:JSON.stringify({Email:form.Email,Password:form.Password,Username:form.Username})})
        data=await data.json()
        console.log(data)
    }
    return (
        <div
            className="flex center"
            style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height:'100vh'
            }}
        >
            <div>
                <label>Email</label>
                <br></br>
                <input
                    type="text"
                    id='Email'
                    value={form.Email}
                    onChange={(e) => {
                        setform({ ...form, [e.target.id]: e.target.value });
                        console.log(form);
                    }}
                    style={{ color: 'black' }}
                ></input>
                <br></br>
                <label>Username</label>
                <br></br>
                <input
                    type="text"
                    id='Username'
                    value={form.Username}
                    onChange={(e) => {
                        setform({ ...form, [e.target.id]: e.target.value });
                        console.log(form);
                    }}
                    style={{ color: 'black' }}
                ></input>
                <br/>
                
                
                <label>Password</label>
                <br />
                <input type="password"
                    id="Password"
                    onChange={(e) => {
                        setform({ ...form, [e.target.id]: e.target.value });
                        console.log(form);
                    }}
                    style={{ color: 'black' }}
                ></input>
                <br></br>
                <button onClick={Login} style={{ backgroundColor: "violet" }}>Login</button>
                    <br></br>
                    <Link href="/">Visit Login page</Link>
            </div>
        </div>
    );
};

export default page;
