import React from "react";
import EditEventPage from "./EditEventPage";
import EventDetailPage from "./EventDetailPage";
import EventsPage from "./EventsPage";
import NewEventPage from "./NewEventPage";
import HomePage from "./HomePage";
import MainNavigation from "./MainNavigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainNavigation />,

      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsPage />,
          loader: async () => {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
              return { isError: true, message: "Something went wrong!" };
            } else {
              const data = await response.json();
              return data;
            }
          },
        },

        { path: "events/:id", element: <EventDetailPage /> },

        { path: "events/new", element: <NewEventPage /> },

        { path: "events/:id/edit", element: <EditEventPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
