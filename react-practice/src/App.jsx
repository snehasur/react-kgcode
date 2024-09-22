import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "./components/Parent";
import Form from "./components/Form";
import Counter from "./components/Counter.jsx";
import Formnew from "./components/Formnew.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import FormValidationBootstrapOnlyAdd from "./components/FormValidationBootstrapOnlyAdd.jsx";
import FormValidationBootstrapWithEdit from "./components/FormValidationBootstrapWithEdit.jsx";
import FormValidationBootstrapWithEditWithprops from "./components/FormValidationBootstrapWithEditWithprops.jsx";
import Todo from "./components/Todo.jsx";
import JsonplaceholderCrud from "./components/JsonplaceholderCrud.jsx";
import JsonplaceholderCrudWithAbortController from "./components/JsonplaceholderCrudWithAbortController.jsx";
import DynamicInput from "./components/DynamicInput.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import MainLayout from "./components/MainLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Login from "./components/Login.jsx";
import FormValidationBootstrapAddEditReactValidation from "./components/FormValidationBootstrapAddEditReactValidation.jsx";
import JsonplaceholderCrudLocalstorageReactValidation from "./components/JsonplaceholderCrudLocalstorageReactValidation";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <GuestLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "parent",
        element: <Parent />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "formnew",
        element: <Formnew />,
      },
      {
        path: "form-validation-add",
        element: <FormValidationBootstrapOnlyAdd />,
      },
      /* double code for error */
      {
        path: "form-validation-edit",
        element: <FormValidationBootstrapWithEdit />,
      },
      /* double code for error */
      {
        path: "form-validation-edit-props",
        element: <FormValidationBootstrapWithEditWithprops />,
      },
      /*
      //update not working 
      //onchange or submit validation at a tym not work
      //loader gif add
      //at 1st only add btn dhow not add form
      //at a tym add form edit form not show
      */
      /* single code for error and api */
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "jsonplaceholder-api-crud-localstorage",
        element: <JsonplaceholderCrud />,
      },
      {
        path: "jsonplaceholder-api-crud-localstorage-abort",
        element: <JsonplaceholderCrudWithAbortController />,
      },
      /* dynamically handle multiple inputs in React, you can manage the state of each input by using a single state object */
      {
        path: "dynamic-input",
        element: <DynamicInput />,
      },
      {
        path: "form-validation-add-edit-react-validation",
        element: <FormValidationBootstrapAddEditReactValidation />,
      },
      /*
      //update not working 
      //loader gif add
      //at 1st only add btn dhow not add form
      //at a tym add form edit form not show
      */
      /* single code for error and api with react hook validation*/
      {
        path: "jsonplaceholder-api-crud-localstorage-react-validation",
        element: <JsonplaceholderCrudLocalstorageReactValidation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
