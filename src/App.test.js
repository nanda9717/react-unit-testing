import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// beforeAll(()=>{
//   console.log('*****Before All*****')
// })

// beforeEach(()=>{
//   console.log('*****Before Each*****')
// })

// test("Snapshot for app component", ()=>{
//   const container = render(<App/>);
//   expect(container).toMatchSnapshot();
// })

test('Testing input box', ()=>{
  //console.log('1');
  render(<App />);
  const checkInput = screen.getByRole('textbox');
  const checkInputPlaceholder = screen.getByPlaceholderText('Enter User Name');
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute('name','username');
  expect(checkInput).toHaveAttribute('id','userId');
  expect(checkInput).toHaveAttribute('type','text');
});

test('OnChange Event testing', ()=>{
  //console.log('2');
  render(<App />);
  let inputBox = screen.getByRole('textbox');
  fireEvent.change(inputBox,{target:{value:'abc'}});
  expect(inputBox.value).toBe('abc');
});

test("Click Event Test Case", ()=>{
  //console.log('3');
  render(<App/>);
  let btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(screen.getByText('Nane Singh')).toBeInTheDocument();
})

// afterAll(()=>{
//   console.log('****After All***')
// })

// afterEach(()=>{
//   console.log("***After Each****")
// })

// describe("UI test case group 1",()=>{
//   test('Testing What is Testing Text', () => {
//     render(<App />);
//     //const textElement = screen.getByText("What is Testing");
//     const textElement = screen.getByText(/What is testing/i);
//     expect(textElement).toBeInTheDocument();
//   });
  
//   test('Testing Image title', () => {
//     render(<App />);
//     const imgTitle = screen.getByTitle("Nature Img");
//     expect(imgTitle).toBeInTheDocument();
//   });
// });

// describe.skip("UI test case group 2",()=>{
//   test('Testing What is Testing Text', () => {
//     render(<App />);
//     //const textElement = screen.getByText("What is Testing");
//     const textElement = screen.getByText(/What is testing/i);
//     expect(textElement).toBeInTheDocument();
//   });
  
//   test('Testing Image title', () => {
//     render(<App />);
//     const imgTitle = screen.getByTitle("Nature Img");
//     expect(imgTitle).toBeInTheDocument();
//   });
// });

// describe.only("UI test case group 3",()=>{
//   test('Testing What is Testing Text', () => {
//     render(<App />);
//     //const textElement = screen.getByText("What is Testing");
//     const textElement = screen.getByText(/What is testing/i);
//     expect(textElement).toBeInTheDocument();
//   });
  
//   test('Testing Image title', () => {
//     render(<App />);
//     const imgTitle = screen.getByTitle("Nature Img");
//     expect(imgTitle).toBeInTheDocument();
//   });
// });

// describe("Describe Nested Grouping",()=>{
//   test('Testing What is Testing Text', () => {
//     render(<App />);
//     //const textElement = screen.getByText("What is Testing");
//     const textElement = screen.getByText(/What is testing/i);
//     expect(textElement).toBeInTheDocument();
//   });

//   describe('Describe inside describe', () => {
//     test('Testing Image title', () => {
//       render(<App />);
//       const imgTitle = screen.getByTitle("Nature Img");
//       expect(imgTitle).toBeInTheDocument();
//     });
//   });
  
// });
