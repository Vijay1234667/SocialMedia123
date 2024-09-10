import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && email && password) {
            navigate("/home");
        } else {
            alert("Please fill in all fields (Username, Email, and Password).");
        }
    };

    return (
        <>
            <section className="login-page">
                <Container>
                    <div className="row">
                        <div className="col-lg-6">
                            <form className="form form-section text-white" onSubmit={handleSubmit}>
                                <div className="text-center">
                                    <PersonPinIcon className="fs-1 text-info" />
                                </div>
                                <div>
                                    <h3 className="text-white font-weight-600 text-center">Sign In</h3>

                                </div>
                                <span className="input-span mb-3 ">
                                    <label htmlFor="username" className="label font-size-18 ">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </span>

                                <span className="input-span mb-3">
                                    <label htmlFor="email" className="label font-size-18">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </span>

                                <span className="input-span mb-3">
                                    <label htmlFor="password" className="label font-size-18">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </span>

                                <span className="mb-2">
                                    <Link to="/" className="text-decoration-none text-white font-size-13">
                                        Forgot password?
                                    </Link>
                                </span>

                                <input
                                    className="submit bg-info-color text-white font-size-16 font-weight-500 mb-2 mt-2"
                                    type="submit"
                                    value="Log in"
                                />
                                <span className="span font-size-15 font-weight-500">
                                    Don't have an account? <Link className="text-white" to="/">Sign up</Link>
                                </span>
                            </form>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default LoginPage;
