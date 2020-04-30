import React from "react";
import "./style.css";

// we can autofill suggestions based on props.employees array
function SearchForm (props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="employee">Employee name:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="employee"
                list="employees"
                type="text"
                className="form-control"
                placeholder="Type in an employees first and/or last name"
                id="employee"
                />
                <datalist id="employees">
                    {props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;