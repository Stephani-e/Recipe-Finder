import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Home extends Component{
    render(){
        return <Header title="Amazing Recipes">
            <Link to='recipes' className="text-uppercase btn btn-secondary btn-lg mt-3 px-4 shadow-sm letter-spacing">
                Search Recipes
            </Link>
        </Header>;
    }
}