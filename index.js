import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const MyButton = React.forwardRef((props, ref) => {
  return (<button {...props} ref={ref}>Click me</button>);
});

MyButton.displayName = 'MyButton';

const App = (props) => {
  let [name, nameSetter] = React.useState('Marc')
  
  
  return (
    <div>
      <Hello name={name} />
      <p>
        Start editing to see some magic happen :)
      </p>

      <MyButton onClick={() => {
        nameSetter('Eric')
      }} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
