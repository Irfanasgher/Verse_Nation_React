import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import './Signup.css';


class Signup extends Component {
    
    toggleSignup = () => {
        document.getElementById("login-toggle").style.backgroundColor="#fff";
        document.getElementById("login-toggle").style.color="#707070";
        document.getElementById("signup-toggle").style.backgroundColor="#ffff";
        document.getElementById("signup-toggle").style.color="#000000";
        document.getElementById("signup-toggle").style.borderBottom = "solid #4566E0";
        document.getElementById("login-toggle").style.borderBottom = "none";
        document.getElementById("login-form").style.display="none";
        document.getElementById("signup-form").style.display="block";
    }

    toggleLogin = () => {
        document.getElementById("login-toggle").style.backgroundColor="#fffff";
        document.getElementById("login-toggle").style.color="#000000";
        document.getElementById("signup-toggle").style.backgroundColor="#fff";
        document.getElementById("signup-toggle").style.color="#707070";
        document.getElementById("login-toggle").style.borderBottom = "solid #4566E0";
        document.getElementById("signup-toggle").style.borderBottom = "none";
        document.getElementById("signup-form").style.display="none";
        document.getElementById("login-form").style.display="block";
    }

    render() {
        return(
            <Router>
            <Switch>
            <Route path="/" exact render={() => {
                return (
            <div class="form-modal">
    
            <div class="form-toggle">
                <button id="login-toggle" onClick={this.toggleLogin}>Sign up</button>
                <button id="signup-toggle" onClick={this.toggleSignup}>Login</button>
            </div>
                
                <div id="login-form">
                    <form>
                        <section>
                            <div style={{float:"left"}}>
                                <label>First Name</label>
                                <input type="text" placeholder="Enter First Name"/>
                            </div>
                            <div style={{}}>
                                <label>Last Name</label>
                                <input type="text" placeholder="Enter Last Name"/>
                            </div>
                            <br style={{clear:"both"}} />

                        </section>
                        <section>
                            <div style={{float:"left"}}>
                                <label>Email</label>
                                <input type="email" placeholder="example@mail.com"/>
                            </div>
                            
                            <div style={{}}>
                                <label>Password</label>
                                <input type="password" placeholder="***********"/>
                            </div>
                            <br style={{clear:"both"}} />

                        </section>
                        
                        
                        <label>Account Type</label>
                        <select class="select">
                            <option value="" disabled selected>Select</option>
                            <option value="value1">Singer</option>
                            <option value="value1">Free</option>
                            <option value="value2">Premium</option>
                            <option value="value3">Band</option>
                        </select>
                        <label>Bio</label>
                        <textarea placeholder="  &nbsp;&nbsp;Tell us about yourself" rows="20" name="comment[text]" id="comment_text" cols="40"
                         autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true">

                        </textarea><br/><br/>
                        <h2>Best Describes you</h2>
                        <div class="default">
                            <p><br/>
                                <label class="container">Rapper
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Producer
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Engineer
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                
                            </p>

                            <p><br/>
                                <label class="container">Singer
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Ghostwrite
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Song writer
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                               
                            </p>

                            <p><br/>
                                <label class="container">Guitarist
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Composer
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Custom
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                
                            </p>
                        </div>
                            <br/><br/><br/>
                            <h2>Genre Range</h2>
                        <div class="changed">
                            <p><br/>
                                <label class="container">Blue
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                                <label class="container">Classic
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                                <label class="container">Country
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                            
                            </p>

                            <p><br/>
                                <label class="container" >Hip-Hop/Rap
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                                <label class="container">Pop
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                                <label class="container">Jazz
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                                
                            </p>

                            <p><br/>
                                <label class="container">R&B Soul
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                                <label class="container">Custom
                                <input type="checkbox"/>
                                <span class="checkmark" style={{borderRadius: "0"}}></span>
                                </label>
                                
                            </p>
                        </div>

                        <br/><br/>
                        <button type="button" class="btn login" style={{marginTop: "60px", width: "640px", height: "45px", textAlign: "center", lineHeight: "1.5px"}}>Sign up</button>
                        <br/><br/>
                        <p style={{textAlign: "center", color: "#585757"}}><a href="javascript:void(0)" style={{textAlign: "center", color: "#585757"}}>Continue with</a></p>
                        <footer>
                            <button type="button" id="social" style={{paddingLeft: "200px"}}><img className="" src='/photos/facebook (1).svg'/></button>
                            <button type="button" id="social"><img className="" src='/photos/google-plus.svg'/></button>
                            <button type="button" id="social"><img className="" src='/photos/apple.svg'/></button>
                        </footer>
                    </form>
                </div>

                <div id="signup-form">
                    <form>
                        <label>
                            Email<input type="email" placeholder="example@mail.com"/> 
                        </label>
                        <br/>
                        <label>
                            Password<input type="password" placeholder="***********"/>
                        </label>
                        <br/>
                        <div style={{float:"left", display: "flex"}}>
                            <input type="checkbox" value="lsRememberMe" id="rememberMe" className="remember" style={{width: "16.72", height: "16.72", marginTop: "2px"}}/>
                            <label for="rememberMe" style={{color: "#B1B1B1", fontSize: "12px"}}>Remember me</label>
                        </div>
                        <a href="#" id="forgot" style={{color: "#B1B1B1", fontSize: "12px", float: "right"}}>Forgot Password?<span class="icn"></span></a><br/><br/>
                        <button type="button" class="btn signup" style={{width: "608px", height: "45px", lineHeight: "1.5px", marginLeft: "23px"}}>Login</button>
                        <p style={{textAlign: "center", color: "#585757"}}>Continue with</p>
                        <footer>
                            <button type="button" id="social" style={{paddingLeft: "200px"}}><img className="" src='/photos/facebook (1).svg'/></button>
                            <button type="button" id="social"><img className="" src='/photos/google-plus.svg'/></button>
                            <button type="button" id="social"><img className="" src='/photos/apple.svg'/></button>
                        </footer>
                    </form>
                </div>

            </div>
               );
            }}/>
            <Route exact path="/Home" component={Home} />
            </Switch>
        </Router>
        );
    }
}

export default Signup