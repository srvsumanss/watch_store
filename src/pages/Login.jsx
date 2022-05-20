
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";
// import Deals from "../components/Deals";
 import Navbar from "../components/Navbar";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3500/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
        <div>
            
            <Navbar/> 
		  <div className="login">
			<div className="">
				<div className="left">
					<form className="login_form" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						< input 
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>

						<br />
						<br />
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<br />
						<br />
						<Link to={"/"}>
						<button type="submit" className="green_btn">Sign In</button>
						</Link>
							
						
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/Signup">
						<button type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
        </div>
	);
};

export default Login;