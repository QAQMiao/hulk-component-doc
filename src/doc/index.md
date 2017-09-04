### 我是钟

** 普通用法 点击hello world暂停和继续时间 **
```react
class exzample extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Clock/>
            </div>
        );
    }
}
```

** 通过props传递name属性 **
```react
const name = 'hulk';
class exzample extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Clock name={name}/>
            </div>
        );
    }
}
```
** 通过props传递onPause **
```react
class exzample extends React.Component {
    constructor(props) {
        super(props);
    }
    onClockPause() {
        alert('clock pause');
    }
    render() {
        return (
            <div>
                <Clock onPause = {this.onClockPause.bind(this)}/>
            </div>
        );
    }
}
```
