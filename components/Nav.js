export default function Nav() {
    return `
    

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img id="navlogo" src="data:image/png;base64,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" width="70" height="50" class="d-inline-block align-top" alt="">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutme">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
            <li class="nav-item">
                  <a class="nav-link" href="#reviews">Reviews</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>

          </ul>

        </div>
      </nav>
    `;
  }