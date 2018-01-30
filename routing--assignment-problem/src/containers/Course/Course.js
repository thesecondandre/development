import React, { Component } from 'react';

import './Course.css';

class Course extends Component {
    // state = {
    //     courseSelected: null
    // }

    // courseClicked(id) {
    //     this.setState({ courseSelected: id });
    // }

    render() {
        let course = null;
        if (this.props.match.params.id) {
            const params = new URLSearchParams(this.props.location.search);
            const title = params.get('course-title');
            course =
                <div className="Course" >
                    <h1>{title}</h1>
                    <p>You selected the Course with ID: {this.props.match.params.id}</p>
                </div>;
        }
        return course;
            // <div className="Course" onClick={this.props.clicked}>
    }
}

export default Course;