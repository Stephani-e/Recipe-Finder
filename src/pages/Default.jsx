import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Default extends Component {
    render() {
        return (
            <Header title="404" styleClass="default-hero">
                <h2 className="text-light text-uppercase">You Are In the Wrong Place</h2>
                <Link to='/' className="text-uppercase btn btn-secondary btn-lg mt-3 px-4 shadow-sm letter-spacing">Return Home</Link>
            </Header>
        )
    }
}