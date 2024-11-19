import React, { useEffect, useState } from 'react'
import TestComponent from './TestComponent';

export default function RTLUnitTesting() {
  let login = true;

  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  const [data, setData] = useState(false);

  const [desc, setDesc] = useState("");

  const [textValue, setTextValue] = useState("");

  const getData = async () =>{
    // let data = await fetch('https://jsonplaceholder.typicode.com/users');
    // data = await data.json();
    // setRecords(data);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch((e) => setError('Error'));
  }

  useEffect(()=>{
    setTimeout(()=>{
      setData(true);
    },1000);
    getData();
  },[])

  return (
    <div>
        {/* For single element (getByRole) */}
        {/* <input type="text" defaultValue={"Nane"} disabled /> */}
        {/* <button>Click Me</button> */}

        {/* For multiple element (getByRole) */}
        {/* <label htmlFor='input1'>Username</label>
        <input type="text" id="input1" />
        <label htmlFor='input2'>Useremail</label>
        <input type="text" id="input2" />
        <button>Click 1</button>
        <button>Click 2</button> */}

        {/* Test Non Semantic elements by custom role */}
        {/* <div role='divCustomRole'>
          Hello World
        </div> */}

        {/* For getAllByRole to test multiple elements */}
        {/* <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>

        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> */}

        {/* For getByLabelText */}
        {/* <label htmlFor='user-name'>Username</label>
        <input id="user-name" type="text" name="username" defaultValue={"Nane"} />
        <br/><br/>
        <label htmlFor='skills'>Skills</label>
        <input type="checkbox" defaultChecked={true} id="skills" /> */}

        {/* For getAllByLabelText */}
        {/* <label htmlFor='user-name1'>Username</label>
        <input id="user-name1" type="text" name="username" />
        <br/><br/>
        <label htmlFor='user-name2'>Username</label>
        <input id="user-name2" type="text" name="username" />
        <br/><br/>
        <label htmlFor='user-name3'>Username</label>
        <input id="user-name3" type="text" name="username" />
        <br/><br/>
        
        <label htmlFor='skills1'>Skills</label>
        <input type="checkbox" defaultChecked={true} id="skills1" /> 

        <label htmlFor='skills2'>Skills</label>
        <input type="checkbox" defaultChecked={true} id="skills2" /> 

        <label htmlFor='skills3'>Skills</label>
        <input type="checkbox" defaultChecked={true} id="skills3" />  */}

        {/* For getByPlaceholderText and getAllByplaceholderText */}
        {/* <input type='text' placeholder='Enter Name' />

        <input type='text' placeholder='Enter the value' />
        <input type='text' placeholder='Enter the value' />
        <input type='text' placeholder='Enter the value' /> */}

        {/* For getByText and getAllByText */}
        {/* <button>Login</button>
        <button>Login</button>
        <button>Login</button>

        <p className='para' id="desc">P tag testing</p>
        <p>P tag testing</p>

        <h1>H1 tag testing</h1>
        <h1>H1 tag testing</h1>
        <h1>H1 tag testing</h1> */}

        {/* getByTestId and getAllByTestId */}
        {/* <div data-testid="div-test-id">
          Testing with test id
        </div>
        <h1 data-testid="h1-test-id">H1 Testing 1</h1>
        <h1 data-testid="h1-test-id">H1 Testing 2</h1>
        <h1 data-testid="h1-test-id">H1 Testing 3</h1>
 */}

          {/* Overriding data-testid */}
          {/* <div data-id="test-div">
            Dummy Text
          </div> */}

          {/* getByDisplayValue */}
          {/* <input type="text" defaultValue={"Nane"} />
          <br/><br/>
          <textarea defaultValue={"Narendra"} />
          <br/><br/>
          <input type="radio" defaultValue={"Nanda"} />
          <br/>  */}

          {/* getAllByDisplayValue */}
          {/* <input type="text" defaultValue={"Nane"} />
          <br/><br/>
          <textarea defaultValue={"Nane"} />
          <br/><br/> */}

          {/* getByTitle */}
          {/* <button title="Click Here">Click Me</button>
          <br/>
          <span title="Click">&#x2660;</span>
          <span title="Click">&#x2660;</span>
 */}

          {/* getAllByTitle */}
          {/* <span title="Click">&#x2660;</span>
          <span title="Click">&#x2660;</span> */}

          {/* getByAltText and getAllByAltText */}
        {/* <img width="100" height="100" alt="Nature Img" src="https://images.unsplash.com/photo-1707056707677-cbbbcf7ad2e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <img width="100" height="100" alt="Nature Img" src="https://images.unsplash.com/photo-1707056707677-cbbbcf7ad2e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
      
      {/* Assertion Method */}
      {/* <input 
          type="text"
          defaultValue={"Nane"}
          name="userName"
          className='test-style dummy'
          id="user-name"
      />

      <button disabled className='btn'>Click Me</button>
   */}

        {/* TextMatch with string and regex */}
        {/* <div>Hello world</div> */}

        {/* TextMatch with Function */}
        {/* <div>Hello World</div> */}

        {/* QueryBy and QueryAllBy | Test hidden elements */}
        {/* {
          login ? <button>Logout</button> : <button>Login</button>
        } */}

        {/* findBy and findAllBy | test async elements */}
        {/* {
          data ? <>Data Found</> : <>Data not found</>
        } */}

        {/* Test Elements with JavaScript Query | Custom Query */}
          {/* <div id="testId">
            Hello World
          </div>
          <div className="testClass">
            Hello Coders
          </div> */}

          {/* Querying Within Elements */}
          {/* <div>
            Hello World
            <p>Hi</p>
            <p>Hello</p>
            <p>Hey</p>
          </div> */}

          {/* Click Event with User Event Library */}
          {/* <h1>{desc}</h1>
          <button onClick={()=> setDesc("hello")}>Click Me</button>
         */}

         {/* onChange Event Testing | Keyboard Interactions */}
         {/* <h2>{textValue}</h2>
         <input type="text" onChange={(e)=> setTextValue(e.target.value)} value={textValue} placeholder='Enter Name' /> */}

          {/* act function */}
          {/* <h2>{textValue}</h2>
          <input type="text" onChange={(e)=> setTextValue(e.target.value)} value={textValue} placeholder='Enter Name' />  */}

          {/* Test component Props */}
          {/* <TestComponent name="Narendra" /> */}

          {/* Functional Props Testing and Function Mocking */}
          {/* Check TestComponent */}

          {/* Debugging in React testing library */}
          {/* <div>
            <h1>Heading 1</h1>
            <h1>Heading 2</h1>
          </div> */}
          
          {/* API Call for Testing and test with MSW */}
          <h2>List of Users</h2>
          { error && <p>{error}</p>}
          <ul>
            {
              records.map((item)=>{
                  return <li key={item.id}>{item.name}</li>
              })
            }
          </ul>

    </div>
  )
}
