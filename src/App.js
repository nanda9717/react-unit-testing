import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState('');

  const handleClick = () => {
    setData('Nane Singh')
  }

  return (
    <div className="App">
      <main className='main'>
        <h3>What is Testing</h3>
        <p>Software Testing is the process of finding errors in a software product before it is launched</p>
        <p>Validate functioning and features of software</p>
        <h4>Testing by Developers</h4>
        <ul>
          <li>Unit Testing - Testing indivisual units or components</li>
          <li>Integrated Testing - Testing between two units or components</li>
          <li>E2E Testing - Test start to end complete project</li>
        </ul>
        <h5>`npm run test`</h5>
        <h5>Run Test Cases Of single file - `npm run test App`</h5>
        <h5>Watch Mode - It will run latest changed file test cases. we have to press `a` to run all test cases</h5>
        <h4>File and Folder naming convention -</h4>
        <ul>
          <li>fileName.test.js</li>
          <li>fileName.test.jsx</li>
          <li>fileName.spec.js</li>
          <li>fileName.spec.jsx</li>
          <li>__tests__ (folder) - We can create test file inside this folder without .test or .spec extension.</li>
        </ul>
        <h4>beforeEach | beforeAll | afterAll | afterEach hooks</h4>
        <ul>
          <li>beforeEach - It will run before each test case.</li>
          <li>beforeAll - It will run only one time before all test cases.</li>
          <li>afterAll - It will run only one time after all test cases.</li>
          <li>afterEach - It will run after each test case.</li>
        </ul>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name='username' id="userId" placeholder='Enter User Name' />
        <h3>{data}</h3>
        <button onClick={handleClick}>Click Me</button>
        <img width="100" height="100" title="Nature Img" src="https://images.unsplash.com/photo-1707056707677-cbbbcf7ad2e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </main>
    </div>
  );
}

export default App;
