import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    // courseClicked(id) {
    //     this.setState({ selectedCourseId: id });
    // }

    render() {
        // let courses = null;
        // if (this.props.match.params.id) {
        //     const params = new URLSearchParams(this.props.location.search);
        //     const title = params.get('course-title');
        //     courses = <Course
        //         courseId={this.props.match.params.id}
        //         // courseTitle={this.state.courses.find(course => course.id === +this.props.match.params.id).title} />
        //         courseTitle={title} />
        // } else {
        //     courses = this.state.courses.map(course => {
        //         return (
        //             <Link key={course.id} to={{
        //                 pathname: '/courses/' + course.id,
        //                 search: '?course-title=' + course.title
        //             }} >
        //                 <Course
        //                     key={course.id}
        //                     courseId={course.id}
        //                     courseTitle={course.title} />
        //                 {/* {clicked={() => this.courseClicked(course.id)} /> */}
        //             </Link>)
        //     })
        // }
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {this.state.courses.map(course => {
                        return (
                            <Link key={course.id} to={{
                                pathname: '/courses/' + course.id,
                                search: '?course-title=' + course.title
                            }} >
                                <article className='Course'>{course.title}</article>
                            </Link>)
                    })}
                </section>
                <Route path='/courses/:id' component={Course} />
            </div>
        );
    }
}

export default Courses;