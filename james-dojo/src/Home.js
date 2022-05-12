import { useState } from 'react';

const Home = () => {

    // let name = 'Mario';

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum', author:'mario', id:1 },
        { title: 'My old website', body: 'lorem ipsum', author:'yoshi', id:2 },
        { title: 'My current website', body: 'lorem ipsum', author:'luigi', id:3 }
    ])

    const [name, setName] = useState('mario');

    const [age, setAge] = useState(25);

    const handleClick = () => {
        console.log("Hello");
        setName('luigi');
        setAge(26);
    }

    return (
        <div className="home">
            <div className="home">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2> {blog.title} </h2>
                        <p> Written by: {blog.author} </p>
                    </div>
                ))}
            </div>
        </div>    
            {/* <h2>Homepage</h2>
            <button>Click me</button>
            <p>{ name }</p>
            <button onClick={() => {
                handleClickAgain('mario');
            }}>Click me again</button> */}
    );
}

export default Home;