import React from 'react'
import Home2 from './Home2';

const BlogList = (props) => {
  return (
      <div className="blog-list">
        {blogs.map((blog) => {
            <div className="blog-preview" key={blog.id}>
                <h2> {blog.title} </h2>
                <p> {blog.author} </p>
            </div>
        })}
      </div>
  );
}

export default BlogList