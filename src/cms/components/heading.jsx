import React, { Component } from 'react'

export default class Heading extends Component {
    selectComponent = (props) => {
        const { type, content } = props;

        switch (type) {
            case 'H1':
                return this.heading1(content);
            case 'H2':
                return this.heading2(content);
            case 'H3':
                return this.heading3(content);
            case 'H4':
                return this.heading4(content);
            case 'H5':
                return this.heading5(content);
            case 'H6':
                return this.heading(content);
            default:
                return;
        }
    }

    heading1 = (props) => (
        <h1>{props}</h1>
    )

    heading2 = (props) => (
        <h2>{props}</h2>
    )

    heading3 = (props) => (
        <h3>{props}</h3>
    )

    heading4 = (props) => (
        <h4>{props}</h4>
    )

    heading5 = (props) => (
        <h5>{props}</h5>
    )

    heading6 = (props) => (
        <h6>{props}</h6>
    )


    render(props) {
        return this.selectComponent(props)
    }
}
