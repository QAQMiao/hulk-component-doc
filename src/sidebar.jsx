import React from 'react';
import {Link} from 'react-router-dom';
const sidebars = [
    {
        type: '我是类型(clock)',
        items: [{
            name: '钟1',
            route: 'index'
        }, 
        {
            name: '钟2',
            route: 'index2'
        }]
    },
]
export default class sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="side-bar">
                {
                    sidebars.map((item) => (
                        <div key={item.type}>
                            <p>{item.type}</p>
                            <ul>
                                {
                                    item.items.map((com) => (
                                        <li key={com.route}><Link to={`/${com.route}`}>{com.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        )
    }
}