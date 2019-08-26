import React, { Component } from 'react'
//styles
import '../../styles/Home.scss'

class Technologies extends Component {
    render() {
        return (
            <div>
                <p className="Home-intro">
                    A all React's Web App working environment with the following technologies:
                </p>
                <ul className="Home-resources">
                    <li>
                        <a href="https://github.com/jaredpalmer/razzle" target="_blank">Razzle</a>
                    </li>
                    <li>
                        <a href="https://sass-lang.com/" target="_blank">Sass</a>
                    </li>
                    <li>
                        <a href="https://storybook.js.org/" target="_blank">Storybook</a>
                    </li>
                    <li>
                        <a href="https://redux.js.org/" target="_blank">Redux</a>
                    </li>
                </ul>
            </div>
        )
    };
}

export default Technologies
            