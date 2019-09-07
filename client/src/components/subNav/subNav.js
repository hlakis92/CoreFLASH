import React from "react";
import { Link } from "react-router-dom";

const SubNav = props => (
    <React.Fragment>
        <div className='catergoryNames' id={props.id}>
            <Link className="categoryNamesStyle" to={`/categories/${props.href}`}> {props.name}</Link>
        </div>
    </React.Fragment>
);

export default SubNav;