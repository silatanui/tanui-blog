const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">Tanui <span>Blog</span> </a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <button type="button" class="btn btn-outline-danger">New Blog</button>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
