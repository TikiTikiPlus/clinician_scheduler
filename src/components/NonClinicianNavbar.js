import React from "react";
import "../styles/sidebar.css"
function NonClinicianSidebar()
{
    return (
        <div className="sidebar">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
        </div>
    );
}

export default NonClinicianSidebar;