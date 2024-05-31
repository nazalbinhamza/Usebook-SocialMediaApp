"use client";
import { useState } from "react";
import "./page.css";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e: any) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://social-media-5ukj.onrender.com/auth/login",
        { email: email, password: password }
      );
      if (email == email) {
        localStorage.setItem("role", "user");
        const item = await axios.get(
          "https://social-media-5ukj.onrender.com/user/"
        );
        let x = item.data;

        const users = x.find((value: any) => value.email == email);

        localStorage.setItem("userid", users._id);
        localStorage.setItem("username", users.username);
      } else {
        toast.error("Invalid email or password");
      }
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        window.location.href = "/Home";
      }, 500);
      console.log(response);
      toast.success("Login Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="container mt-64">
        <div className="input-box">
          <form>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="text"
              placeholder="Email address"
              className="email-inp"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Passwords"
              className="pass-inp"
            />
            {/* <button onClick={handleClick} className='log-inp'>Log in</button> */}
            <button
              onClick={handleClick}
              className="pushable ml-[59px] mt-[40px]"
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Log in</span>
            </button>
          </form>
          <Link href={"/forgot"}>
            <h6 className="forgotten">Forgotten password?</h6>
          </Link>
          <Link href={"/sign"}>
            <button className="new-acc">Create new account</button>
          </Link>
        </div>
        <h6 className="sm-sentence">
          <span className="font-bold cursor-pointer">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/Sign"}
            >
              Create a Page
            </Link>{" "}
          </span>
          for a celebrity,brand or business.
        </h6>
        <div style={{ display: "flex", justifyContent: "left" }}>
          <img className="usebook-img" src="logo.png" alt="" />
          <h5
            style={{ position: "absolute", left: "140px", top: "330px" }}
            className="font-bold"
          >
            Usebook helps to connect and share
            <br />
            with the people in your life.
          </h5>
        </div>
      </div>
    </div>
  );
}
