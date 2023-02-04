function CustomLink({ to, children }) {

  return (
    <a
      className="menu-link menu-link--selected"
      href={to}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState({}, null, to);
      }}
    >
      {children}
    </a>
  );
}

export default CustomLink;
