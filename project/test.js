Show the employees’ list in a table. It also displays edit and delete buttons in the table, when you click on the edit button it redirects to the employee update page with the details in the form and displays the name, and image on the header.
If you update any details of the employee then the header is also updated.
If you click on the delete button then remove the employee from the table.

Use redux & MUI Library(or you can use any UI library)

Here is the sample API:  https://dummy.restapiexample.com

Show the employees’ list in a table. It also displays edit and delete buttons in the table, when
you click on the edit button it redirects to the employee update page with the details in the form
and displays the name, and image(use any dummy image url) on the header.
If you update any details of the employee then the header is also updated.
If you click on the delete button then remove the employee from the table.
Use redux &amp; MUI Library(or you can use any UI library)
Here is the sample Postman API:
https://documenter.getpostman.com/view/30211970/2sAXqv5M7N
Import this URL in your postman and choose environment (interview) for base_url.
==============================================

Show the employees’ list in a table. It also displays edit and delete buttons in the table, when
you click on the edit button it redirects to the employee update page with the details in the form
and displays the name, and image(use any dummy image url) on the header.
If you update any details of the employee then the header is also updated.
If you click on the delete button then remove the employee from the table.
Use redux &amp; MUI Library(or you can use any UI library)
Here is the sample Postman API:
this this for employee list
GET
https://interviewtesting.onrender.com/v1/users/employee/list
{
  "code": 200,
  "message": "user list",
  "isSuccess": true,
  "data": [
    {
      "image": "",
      "age": "15",
      "salary": 100,
      "_id": "66f6b2b335e909006c509f1b",
      "fullName": "Test1",
      "email": "test@test.com",
      "phone": "6748473",
      "createdAt": "2024-09-27T13:27:15.070Z",
      "updatedAt": "2024-09-27T13:27:15.070Z"
    },
    {
      "image": "",
      "age": "34",
      "salary": 434,
      "_id": "66f67af0aa6f67006d6b6cfe",
      "fullName": "Farhan",
      "email": "farhan@test.com",
      "phone": "6789876",
      "createdAt": "2024-09-27T09:29:20.873Z",
      "updatedAt": "2024-09-27T09:29:20.873Z"
    },
    {
      "image": "",
      "age": "26",
      "salary": 40000,
      "_id": "66f497536683cf006c166bd5",
      "fullName": "Test Employee",
      "email": "test@yopmail.com",
      "phone": "8763342641",
      "createdAt": "2024-09-25T23:05:55.841Z",
      "updatedAt": "2024-09-25T23:05:55.841Z"
    },
    {
      "image": "",
      "age": "26",
      "salary": 40000,
      "_id": "66f484716683cf006c166b7c",
      "fullName": "Test Employee",
      "email": "test1@yopmail.com",
      "phone": "8763342641",
      "createdAt": "2024-09-25T21:45:21.129Z",
      "updatedAt": "2024-09-25T23:02:36.113Z"
    },
    {
      "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      "age": "22",
      "salary": 24000,
      "_id": "66f3f7aa2a7499006dd99bec",
      "fullName": "shadab",
      "email": "farhan964139@gmail.com",
      "phone": "7001088639",
      "createdAt": "2024-09-25T11:44:42.099Z",
      "updatedAt": "2024-09-25T21:06:11.448Z"
    }
  ]
}
this is response which need to show on employee listing page

this is for update employee
PUT
https://interviewtesting.onrender.com/v1/users/employee-update/66f26341aa89fa4a244b2204
{
    "fullName": "souvikhh",
    "email": "sk@gmailh.com",
    "phone": "+913343h4343",
    "image": "htthyyy",
    "age": "240",
    "salary": 120008
}
this is for remove employee

DELETE
https://interviewtesting.onrender.com/v1/users/employee-remove/66f26341aa89fa4a244b2204 

this is for employee view

GET
https://interviewtesting.onrender.com/v1/users/employee/66f26341aa89fa4a244b2204

I need component like header footer layout employeelisting employeeedit etc minimum component with MUI Library in react

also use redux,for route use createBrowserRouter  to handel the code

also use latest code and simple logic with react hook validationin edit page use dummy url to show image

=========================================
npm install @mui/material @emotion/react @emotion/styled react-router-dom react-redux @reduxjs/toolkit react-hook-form
npm install react-router-dom
npm install axios


============================================
form field small krte hbe
loading middel
button gaye gaye lege gache
header footer fix