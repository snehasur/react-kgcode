const router = createBrowserRouter([
    {
      path: "/login",
      element: <GuestLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/plans",
          element: <PlanListPage />,
        },
        {
          path: "/plans/create",
          element: <CreatePlanPage />,
        },
        {
          path: "/faq-categories",
          element: <FaqCategoryList />,
        },
        {
          path: "/faq-categories/create",
          element: <CreateFaqCategoryPage />,
        },
        {
          path: "/faq",
          element: <FaqList />,
        },
        {
          path: "/faq/create",
          element: <CreateFaqPage />,
        },
        {
          path: "/tutorials",
          element: <TutorialList />,
        },
        {
          path: "/tutorials/create",
          element: <CreateTutorialPage />,
        },
        {
          path: "/customers",
          element: <CustomerListPage />,
        },
        {
          path: "/interview-categories",
          element: <InterviewCategoryList />,
        },
        {
          path: "/interview-categories/create",
          element: <CreateInterviewCategoryPage />,
        },
        {
          path: "/settings",
          element: <GeneralSettingsPage />,
        },
        {
          path: "/interview-questions",
          element: <InterviewQuestionList />,
        },
        {
          path: "/interview-questions/add",
          element: <InterviewQuestionForm />,
        },
        
        {
          path: "/interview-questions/add1",
          element: <AddEditInterview />,
        },
        {
          path: "/interview/audio",
          element: <AudioRecorder />,
        },
      ],
    },
  ])