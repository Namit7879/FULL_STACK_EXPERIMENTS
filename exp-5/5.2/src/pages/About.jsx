export default function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>
        This page demonstrates client-side routing in React applications. By using React Router,
        we can navigate between different views without any page reload.
      </p>
      <p>
        The application uses the BrowserRouter component to provide routing context, Routes to
        define our routes, and Route components to map paths to components.
      </p>
      <p>
        Benefits of client-side routing include faster navigation, reduced server load, and a
        smooth user experience similar to single-page applications.
      </p>
    </div>
  )
}
