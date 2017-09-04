import React from 'react';
import ReactDOM from 'react-dom';

import SideBar from './sidebar';
import axios from 'axios';

const renderer = new marked.Renderer();
const builtinCode = renderer.code;
renderer.code = function(code, lang, other) {
    var result = builtinCode.call(renderer, code, lang == 'react' ? 'javascript' : lang, other);
    if (lang === 'react') {
        const id = 'demo_' + Math.random().toString(36).substr(-8);
        result = '<div class="demo"><div class="inner"></div><input id="' + id + '" type="checkbox"><label for="'
        + id + '"></label>' + result + '</div>';
    }
    return result;
}
export default class main extends React.Component {
    constructor(props) {
        super(props);
    }
    onupdate(page) {
        const match = page || 'index';
        axios.get(`/src/doc/${match}.md`).then((res) => {
            demo.innerHTML = this.makeContent(res.data);
            this.make();
            Prism.highlightAll();
        }, () => {
            demo.innerHTML = '<div>网络失败</div>';
        });
        return <div>loading</div>;
    }
    makeContent(md) {
        return marked(md, { renderer: renderer });
    }
    make() {
        const demoContainers = root.querySelectorAll('.demo');
        if (!demoContainers.length) return;
        Array.from(demoContainers).map(function(container) {
            const rawCode = container.querySelector('code').textContent;
            return {
                el: container.querySelector('.inner'),
                raw: rawCode,
                parsed: rawCode
            };
        }).map(function(obj) {
            var code = Babel.transform(`${obj.parsed}`, {
                presets: ['es2015', 'es2017', 'react']
            }).code;
            var Exzample = eval(code + 'exzample;');
            ReactDOM.render(<Exzample />, obj.el);
        });
    }
    render() {

        return (
            <div>
                <header>hulk doc</header>
                <SideBar></SideBar>
                <div id="demo">
                    {this.onupdate(this.props.match.params.page)}
                </div>
            </div>
        )
    }
}