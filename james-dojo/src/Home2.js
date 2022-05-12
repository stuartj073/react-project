import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home =  () => {

  const [blogs, setBlogs] = useState([
      {title: 'New website', body: 'lorem ipsum', author: 'mario', id:1},
      {title: 'New website', body: 'lorem ipsum', author: 'mario', id:2},
      {title: 'New website', body: 'lorem ipsum', author: 'mario', id:3}
  ]);


  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== blog.id);
    setBlogs(newBlogs);
  }
  
  useEffect(() => {
    console.log('Use effect ran');
  }, [name]);

  // []- for useEffect only runs function once.

  return (
    <div className="home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios Blogs" />
        <button onClick={() => setName('luigi')}>Change name</button>
        <p>{name}</p>
    </div>
  )
}
