import React from 'react';

const Planta = props => (
  <div>Hello {props.name}!</div>
)

const App = () => {
  return (
    <div>My plants go here:
      <Planta name="Plants plants plants!" />,
    </div>
  );
};

export default App;