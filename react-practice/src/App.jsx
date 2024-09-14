import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; // Import BrowserRouter
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
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* Routes Setup */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/formnew" element={<Formnew />} />
          <Route
            path="/form-validation-add"
            element={<FormValidationBootstrapOnlyAdd />}
          />
          {/* double code for error */}
          <Route
            path="/form-validation-edit"
            element={<FormValidationBootstrapWithEdit />}
          />
          {/* double code for error */}
          <Route
            path="/form-validation-edit-props"
            element={<FormValidationBootstrapWithEditWithprops />}
          />
          <Route path="/todo" element={<Todo />} />
          {/* update not working //onchange submit validation at a tym not work*/}
          {/* single code for error and api */}
          <Route
            path="/jsonplaceholder-crud"
            element={<JsonplaceholderCrud />}
          />
          <Route
            path="/jsonplaceholder-crud-abort"
            element={<JsonplaceholderCrudWithAbortController />}
          />
          {/* dynamically handle multiple inputs in React, you can manage the state of each input by using a single state object */}
          <Route path="/dynamic-input" element={<DynamicInput />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
