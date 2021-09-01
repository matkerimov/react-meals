import React from 'react';
import HeaderLogo from "./Header-logo";
import HeaderNavBar from "./Header-nav-bar";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <div className="navbar">
                        <HeaderLogo />
                        <HeaderNavBar />
                    </div>
                </div>
            </div>
            {/*<div style={{background:"url(https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1514&q=80)"}} className="jumbotron bg-cover text-white vh-100">*/}
            {/*    <div className="container pt-50 text-center">*/}
            {/*        <h1 className="display-4 font-weight-bold">Hungry?</h1>*/}
            {/*        <p className="font-italic mb-0">Prepare your favorite food in 30 minutes</p>*/}
            {/*        <p className="font-italic">With the help of my website*/}
            {/*            /!*<a href="https://bootstrapious.com" className="text-white">*!/*/}
            {/*            /!*    <u>Bootstrapious</u>*!/*/}
            {/*            /!*</a>*!/*/}
            {/*        </p>*/}
            {/*         <a href={"<AllMeals />"} role="button" className="btn btn-primary px-5">See All Features</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="container py-5">*/}
            {/*    <h2 className="h3 font-weight-bold">Some demo content</h2>*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-lg-10 mb-4">*/}
            {/*            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>*/}
            {/*            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>*/}
            {/*        </div>*/}
            {/*        <div className="col-lg-8">*/}
            {/*            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur <strong className="font-weight-bold text-dark">adipisicing elit, sed </strong>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong className="font-weight-bold text-dark">reprehenderit in voluptate </strong>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
};

export default Header;

