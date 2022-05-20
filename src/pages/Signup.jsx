import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import Navbar from "../components/Navbar";


const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3500/users";
			const { data: res } = await axios.post(url, data);
			navigate("/Login");
			console.log(res.message);
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
       
		<div className="signup">
			<div className="signup">
				<div className="right">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="input"
						/>
            <br />
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="input"
						/>
         <br />
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						<br />
						{error && <div className="error_msg">{error}</div>}
						{/* <button type="submit" className="green_btn">
							Sing Up
						</button> */}
						<br />
						<br />
                        <Link to="/Login">
						<button type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
					</form>
				</div>
			</div>
		</div>
        </div>
	);
};

export default Signup;