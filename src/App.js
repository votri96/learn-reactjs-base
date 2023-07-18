import React from 'react';
import './App.scss';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <AlbumFeature />
      <TodoFeature />
    </div>
  );
}

export default App;
