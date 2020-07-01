import './css/normalize.css';
import './css/master.css';

var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}

ReactDOM.render(<MyComponent />,  document.querySelector('comment_container'));

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class Form extends React.Component {
//     render() {
//         return (
//             <form>
//                 <input type="text" name="author" placeholder="Author">
//                 <input type="button" name="comment" value="Добавить">
//                 <input type="text" name="text" placeholder="Text">
//             </form>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Form />,
//     document.querySelector('comment_container')
// );
