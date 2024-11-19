import { render, screen, configure, within, act, prettyDOM, logRoles } from '@testing-library/react';
import RTLUnitTesting from './RTLUnitTesting';
import userEvent from '@testing-library/user-event';
import TestComponent from './TestComponent';
configure({testIdAttribute: 'data-id'});
import { server } from './mocks/server';
import { rest } from 'msw';

// API Call for Testing and test with MSW

test("Test Heading of API Call",()=>{
  render(<RTLUnitTesting/>);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Render test for Mock APIs",async ()=>{
  render(<RTLUnitTesting/>);
  const elm = await screen.findAllByRole("listitem");
  expect(elm).toHaveLength(4);
});

test("Render Mock APIs error",async ()=>{
  server.use(
    rest.get('https://jsonplaceholder.typicode.com/users',
      (req, res, ctx) => {
        return res(ctx.status(500))
      }
    )
  );
  render(<RTLUnitTesting/>);
  const error = await screen.findByText('Error');
  expect(error).toBeInTheDocument();
});


// Debugging in React testing library

// test("Testing Component for Debugging",()=>{
//   const {container, debug} = render(<RTLUnitTesting/>);
//   //console.log(container);
//   //console.log(prettyDOM(container));
//   //debug();
//   logRoles(container);
//   // const elm = screen.getByText("Heading 2");
//   // expect(elm).toBeInTheDocument();
// });

// Functional Props Testing and Function Mocking

// test("Test Case Functional Props Testing",async ()=>{
//   const testFunc = jest.fn();
//   userEvent.setup();
//   render(<TestComponent name="Nane" handleClick={testFunc} />)
//   const btn = screen.getByRole('button');
//   await userEvent.click(btn);
//   expect(testFunc).toBeCalled();
// })

// Test component Props

// test("Test Case for Props Testing",()=>{
//   const name = "John"
//   render(<TestComponent name={name} />);
//   const data = screen.getByText(name);
//   expect(data).toBeInTheDocument();
// })

// act function

// test("Testing with act Function",async ()=>{
//   userEvent.setup();
//   render(<RTLUnitTesting/>);
//   const elm = screen.getByRole('textbox');
//   await act(async()=>{
//     await userEvent.type(elm,"Nanda");
//   })
//   expect(screen.getByText("Nanda")).toBeInTheDocument();
// });

// onChange Event Testing | Keyboard Interactions

// test("OnChange Event Testing",async ()=>{
//   userEvent.setup();
//   render(<RTLUnitTesting/>);
//   const elm = screen.getByRole('textbox');
//   await userEvent.type(elm,"narendra");
//   expect(screen.getByText("narendra")).toBeInTheDocument();
// })


// Click Event with User Event Library

// test("Click Event with User Event Library",async ()=>{
//   userEvent.setup();
//   render(<RTLUnitTesting/>);
//   const btn = screen.getByText("Click Me");
//   await userEvent.click(btn);
//   expect(screen.getByText("hello")).toBeInTheDocument();
// });

// Querying Within Elements

// test("Test Case for Querying Within Elements",()=>{
//   render(<RTLUnitTesting/>);
//   const elm = screen.getByText("Hello World");
//   expect(elm).toBeInTheDocument();
//   // check child component inside any element
//   let subElm = within(elm).getByText("Hi");
//   expect(subElm).toBeInTheDocument();
// })

//Test Elements with JavaScript Query | Custom Query

// test("Test Cases with Custom Query",()=>{
//   render(<RTLUnitTesting/>);
//   const elm = document.querySelector("#testId");
//   expect(elm).toBeInTheDocument();
//   expect(elm).toHaveTextContent("Hello World");

//   const elm2 = document.querySelector(".testClass");
//   expect(elm2).toBeInTheDocument();
// });


// findBy

// test("Test Cases with findBy",async ()=>{
//   render(<RTLUnitTesting/>);
//   const elm = await screen.findByText("Data Found",{},{timeout:5000});
//   expect(elm).toBeInTheDocument();
// })

// QueryBy and QueryAllBy

// test("QueryBy Test Cases",()=>{
//   render(<RTLUnitTesting/>);
//   //const elem = screen.getByText('Login');
//   const elem = screen.queryByText('Login');
//   expect(elem).not.toBeInTheDocument();
// });

// TestMatch with Function

// test("Test Match with Function",()=>{
//   render(<RTLUnitTesting/>);
//   //const div = screen.getByText((content,element)=> content.startsWith('Hello'));
//   //const div = screen.getByText((content,element)=> content.endsWith('World'));
//   //const div = screen.getByText((content,element)=> content.endsWith('ld'));
//   //const div = screen.getByText((content,element)=> content.includes('ld'));
//   // const div = screen.getByText((content,element)=> {
//   //   return content.includes('ll');
//   // });
//   const div = screen.getByText((content,element)=> {
//     return content.length === 11;
//   });
//   expect(div).toBeInTheDocument();
// })


// TestMatch with String and Regex

// test("Text Match with String",()=>{
//   render(<RTLUnitTesting/>);
//   const div = screen.getByText("Hello World",{exact:false});
//   //const div = screen.getByText("hello world",{exact:false});
//   //const div = screen.getByText("Hello",{exact:false});
//   expect(div).toBeInTheDocument();
// });

// test("Text Match with Regex",()=>{
//   render(<RTLUnitTesting/>);
//   const div = screen.getByText(/Hello/);
//   //const div = screen.getByText(/lo wo/);
//   //const div = screen.getByText(/Hello World/i);
//   //const div = screen.getByText(/Hello w?orld/i);
//   expect(div).toBeInTheDocument();
// });

// Assertion Methods

// test("Test Cases for Assertion Methods",()=>{
//   render(<RTLUnitTesting/>);
//   const input = screen.getByRole("textbox");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue(); // check value is exist or not
//   expect(input).toHaveValue("Nane"); // match the value
//   expect(input).toBeEnabled();
//   //expect(input).toBeDisabled();
//   expect(input).toHaveAttribute('id');
//   expect(input).toHaveClass('test-style');
//   expect(input).toHaveClass('dummy');
// })

// test("Negative Test Cases for Assertion Methods",()=>{
//   render(<RTLUnitTesting/>);
//   const btn = screen.getByRole("button");
//   expect(btn).toBeInTheDocument();
//   expect(btn).toHaveClass('btn');
//   expect(btn).not.toHaveClass('btn1');
//   expect(btn).not.toHaveAttribute('id');
//   expect(btn).not.toBeEnabled();
// })

// RTL Queries

// test("Testing single Image with getByAltText",()=>{
//   render(<RTLUnitTesting/>);
//   const altText = screen.getByAltText('Nature Img');
//   expect(altText).toBeInTheDocument();
// });

// test("Testing multiple Images with getAllByAltText",()=>{
//   render(<RTLUnitTesting/>);
//   const altText = screen.getAllByAltText('Nature Img');
//   for(let i=0;i<altText.length;i++){
//     expect(altText[i]).toBeInTheDocument();
//   }
// });

// test("Testing with getByTitle",()=>{
//   render(<RTLUnitTesting/>);
//   let btn = screen.getByTitle('Click Here');
//   expect(btn).toBeInTheDocument();
//   let span = screen.getByTitle('Click');
//   expect(span).toBeInTheDocument();
// });

// test("Testing with getAllByTitle",()=>{
//   render(<RTLUnitTesting/>);
//   let span = screen.getAllByTitle('Click');
//   for(let i=0;i<span.length;i++){
//     expect(span[i]).toBeInTheDocument();
//   }
// })

// test("Testing input field with getByDisplayValue",()=>{
//   render(<RTLUnitTesting/>);
//   const input = screen.getAllByDisplayValue('Nane');
//   for(let i=0;i<input.length;i++){
//     expect(input[i]).toBeInTheDocument();
//   }
// });

// test("Testing input field with getByDisplayValue",()=>{
//   render(<RTLUnitTesting/>);
//   const input = screen.getByDisplayValue('Nane');
//   expect(input).toBeInTheDocument();
// })

// test("Testing textarea field with getByDisplayValue",()=>{
//   render(<RTLUnitTesting/>);
//   const textarea = screen.getByDisplayValue('Narendra');
//   expect(textarea).toBeInTheDocument();
// });

// test("Testing radio field with getByDisplayValue",()=>{
//   render(<RTLUnitTesting/>);
//   const radio = screen.getByDisplayValue('Nanda');
//   expect(radio).toBeInTheDocument();
// });

// test("Testing with getByTestId With Overriiden ID",()=>{
//   render(<RTLUnitTesting/>);
//   const divId = screen.getByTestId('test-div');
//   expect(divId).toBeInTheDocument();
// });

// test("Testing with getByTestId",()=>{
//   render(<RTLUnitTesting/>);
//   const divId = screen.getByTestId('div-test-id');
//   expect(divId).toBeInTheDocument();
// });

// test("Testing with getAllByTestId for multiple elements",()=>{
//   render(<RTLUnitTesting/>);
//   const h1Ids = screen.getAllByTestId('h1-test-id');
//   for(let i=0;i<h1Ids.length;i++){
//     expect(h1Ids[i]).toBeInTheDocument();
//   }
// });

// test("getByText for single button",()=>{
//   render(<RTLUnitTesting/>);
//   const btn = screen.getByText("Login");
//   expect(btn).toBeInTheDocument();
// });

// test("getByText for single p tag",()=>{
//   render(<RTLUnitTesting/>);
//   const pTag = screen.getByText("P tag testing");
//   expect(pTag).toBeInTheDocument();
// expect(pTag).toHaveClass('para');
// expect(pTag).toHaveAttribute('id');
// });

// test("getByText for single h1 tag",()=>{
//   render(<RTLUnitTesting/>);
//   const h1Tag = screen.getByText("H1 tag testing");
//   expect(h1Tag).toBeInTheDocument();
// });

// test("getAllByText for multiple button",()=>{
//   render(<RTLUnitTesting/>);
//   const btns = screen.getAllByText("Login");
//   for(let i=0;i<btns.length;i++){
//     expect(btns[i]).toBeInTheDocument();
//   }
// });

// test("getAllByText for multiple p tag",()=>{
//   render(<RTLUnitTesting/>);
//   const pTag = screen.getAllByText("P tag testing");
//   for(let i=0;i<pTag.length;i++){
//     expect(pTag[i]).toBeInTheDocument();
//   }
// });

// test("getAllByText for multiple h1 tag",()=>{
//   render(<RTLUnitTesting/>);
//   const h1Tag = screen.getAllByText("H1 tag testing");
//   for(let i=0;i<h1Tag.length;i++){
//     expect(h1Tag[i]).toBeInTheDocument();
//   }
// });

// test("getByPlaceholderText for input field",()=>{
//   render(<RTLUnitTesting/>);
//   const input = screen.getByPlaceholderText('Enter Name');
//   expect(input).toBeInTheDocument();
// });

// test("getAllByPlaceholderText for multiple input fields",()=>{
//   render(<RTLUnitTesting/>);
//   const inputs = screen.getAllByPlaceholderText('Enter the value');
//   for(let i=0;i<inputs.length;i++){
//     expect(inputs[i]).toBeInTheDocument();
//   }
// });

// test("getAllByLabelText for input text field",()=>{
//   render(<RTLUnitTesting/>);
//   const textFields = screen.getAllByLabelText("Username");
//   for(let i=0;i<textFields.length;i++){
//     expect(textFields[i]).toBeInTheDocument();
//   }
// });

// test("getAllByLabelText for checkbox field",()=>{
//   render(<RTLUnitTesting/>);
//   const checkboxes = screen.getAllByLabelText("Skills");
//   for(let i=0;i<checkboxes.length;i++){
//     expect(checkboxes[i]).toBeInTheDocument();
//     expect(checkboxes[i]).toBeChecked();
//   }
// });

// test("getByLabelText for input text field",()=>{
//   render(<RTLUnitTesting/>);
//   const textField = screen.getByLabelText("Username");
//   expect(textField).toBeInTheDocument();
//   expect(textField).toHaveValue("Nane");
// });

// test("getByLabelText for checkbox",()=>{
//   render(<RTLUnitTesting/>);
//   const checkboxField = screen.getByLabelText("Skills");
//   expect(checkboxField).toBeInTheDocument();
//   expect(checkboxField).toBeChecked();
// });

// test("getAllByRole to check multiple elements",()=>{
//   render(<RTLUnitTesting/>);
//   const btns = screen.getAllByRole('button');
//   // expect(btns[0]).toBeInTheDocument();
//   // expect(btns[1]).toBeInTheDocument();
//   for(let i=0;i<btns.length;i++){
//     expect(btns[i]).toBeInTheDocument();
//   }

//   const options = screen.getAllByRole("option");
//   for(let i=0;i<options.length;i++){
//     expect(options[i]).toBeInTheDocument();
//   }
// });

// test("Get By role for non semantic elements",()=>{
//   render(<RTLUnitTesting />);
//   const div1 = screen.getByRole('divCustomRole');
//   expect(div1).toBeInTheDocument();
// });

// test("Get by role for multiple button",()=>{
//   render(<RTLUnitTesting/>);
//   const btn1 = screen.getByRole('button',{name:'Click 1'});
//   const btn2 = screen.getByRole('button',{name:'Click 2'});
//   expect(btn1).toBeInTheDocument();
//   expect(btn2).toBeInTheDocument();
// });

// test("Get by role for multiple text",()=>{
//     render(<RTLUnitTesting/>);
//     const text1 = screen.getByRole('textbox',{name:"Username"});
//     const text2 = screen.getByRole('textbox',{name:'Useremail'});
//     expect(text1).toBeInTheDocument();
//     expect(text2).toBeInTheDocument();
// });

// test("Get by role for button",()=>{
//   render(<RTLUnitTesting/>);
//   const btn = screen.getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

// test("Get by role for Input Text",()=>{
//   render(<RTLUnitTesting/>);
//   const inputText = screen.getByRole('textbox');
//   expect(inputText).toBeInTheDocument();
//   expect(inputText).toHaveValue("Nane");
//   expect(inputText).toBeDisabled();
// })