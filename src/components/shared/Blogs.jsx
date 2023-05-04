import React from "react";

const Blogs = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <h1 className="font-bold text-xl">
          Q : Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <p className="font-semibold">
          Ans:Controlled Component: Unlike the uncontrolled component, the input
          form element in the controlled component is handled by the component
          rather than the DOM. It takes its current value through props. The
          changes are notified through callbacks. Uncontrolled component:
          Similar to the traditional HTML form inputs, the uncontrolled
          component can be written using a ref to get form values from the DOM.
          Thus there is no need to write an event handler for every state update
          and the HTML elements maintain their own state that will be updated
          when the input value changes.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-xl">
          Q:How to validate React props using PropTypes?
        </h1>
        <p className="font-semibold">
          Ans:React PropTypes validators <br />
           PropTypes.any : The prop can be of any data
          type. PropTypes.bool : The prop should be a Boolean. PropTypes.number
          : The prop should be a number. PropTypes.string : The prop should be a
          string. PropTypes.func : The prop should be a function.
          PropTypes.array : The prop should be an array.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-xl">
      Q:Tell us the difference between nodejs and express js.
        </h1>
        <p className="font-semibold">
            Ans:Node.js is a run-time environment created to run JavaScript on the server side.

Express.js is a framework for Node.js, so in order to use it, you will use Node.js anyway. Express.js will help you organize your application better. It provides many features which will speed up the development for example mechanism for middlewares, more efficient REST support or robust routing.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-xl">
            Q:What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="font-semibold">
            Ans:Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
