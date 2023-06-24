import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector, UseSelector } from 'react-redux';
import { fetchPosts } from "./posts/posts.action"

function App() {
  const posts = useSelector(({ posts }) => posts.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
   
  }, []);
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       =
         {posts.map((post) => {
        return (
          <p >{post.title}</p>
        )
      })}
      </header>
    </div>
    
    </>
  );
}

export default App;
