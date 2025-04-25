import React from 'react';
import {Posts} from './components/Posts'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isCounting: false,
      posts: [
        {id: 'abc1', name: 'JS Basics'},
        {id: 'abc2', name: 'JS Advanced'},
        {id: 'abc3', name: 'React JS'},
      ]
    };

    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleSomething = () => {
    console.log('App.js setState update');
    // this.setState({
      
    // });
  }

  // typical method + binding
  handleClick1() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  // arrow function
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  componentDidMount() {
    const userCount = localStorage.getItem('timer');
    if (userCount) {
      this.setState({
        count: +userCount
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('timer', this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  handleStart = () => {
    this.setState({
      isCounting: true
    });
    this.counterId = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000)
  }

  handleStop = () => {
    this.setState({
      isCounting: false
    });
    clearInterval(this.counterId);
  }

  handleReset = () => {
    this.setState({
      isCounting: false,
      count: 0
    });
    clearInterval(this.counterId);
  }

  removePost = (id) => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id)
    });
  } 

  render() {
    const {posts} = this.state;

    return (
    <div className="App" style={{ margin: 'auto', width: '300px' }}>
{/* anonymous function () => this.setState({ count: this.state.count + 1 }) */}
      <h1>React Timer</h1>
      {
        // this.state.posts.map((post, index) => (
        //   <h2 key={post.id}>{post.name}</h2>
        // ))
        // <Posts posts={posts} cb={this.handleSomething} />
        <Posts posts={posts} removePost={this.removePost} />
      }
      
      <h3>{this.state.count}</h3>
      { !this.state.isCounting ? (
        <button onClick={this.handleStart}>Start</button>
      ) : (
        <button onClick={this.handleStop}>Stop</button>
      )}
      {/* <span style={countStyle}>{this.state.count}</span> */}
      <button onClick={this.handleReset}>Reset</button>
    </div>
    );
  }
}

export default App;

const countStyle = { margin: '0 0.75rem', display: 'inline-block' }