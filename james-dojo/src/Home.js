import { useState } from 'react';

const Home = () => {

    // let name = 'Mario';

    const [name, setName] = useState('mario');

    const [age, setAge] = useState(25);

    const handleClick = () => {
        console.log("Hello");
        setName('luigi');
        setAge(26);
    }

    // const handleClickAgain = (name) => {
    //     console.log('hello' + name);
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button>Click me</button>
            <p>{ name }</p>
            <button onClick={() => {
                handleClickAgain('mario');
            }}>Click me again</button>
        </div>
    );
}

export default Home;