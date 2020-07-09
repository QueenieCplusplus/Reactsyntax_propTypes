// 2020.7/10, am 7:20
// use the propTypse to define the "config obj" which can verify the property of class
// once using the propTypes, then instantial the class shall require the propsTypes.

// 不建議使用
// getDefaultProps 也已經 depreacted

var React = require('react');
var PropTypes = require('prop-types');

var Table = React.createClass({


    //the content of object called propType, to access the content by using React.PropTypes
    propTypes = {

        // 必輸入的屬性
        col: PropTypes.string({id: React.PropTypes.number.isRequird}).isRequird,

        // 可選屬性
        onClick: React.PropTypes.func
    
    },

    //ES6
    //Table.propTypes = {col: PropTypes.string}

    render: function(){

        return(

        <h1>hi, kate! This table shows {this.props.col}</h1>

        );

    }

});