import { Link } from "react-router-dom";

// all photos royalty-free

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1/Home"
              >
                <img
                  src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2/Home"
              >
                <img
                  src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>CS2500</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Fundamentals of Computer Science
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3/Home"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1669077047112-27a604f93f31"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>LING1100</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to Linguistics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4/Home"
              >
                <img
                  src="https://images.unsplash.com/photo-1532457573542-37fe94c98cf2"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>GAME2500</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to Game Design
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5/Home"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1714618937022-97adf8e67cb6"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>CS4600</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Operating Systems
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6/Home"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>PHIL1300</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Knowledge in the Digital World
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/7/Home"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>CS35000</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object Oriented Design ^ 2
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Courses/8/Home"
              >
                <img
                  src="https://images.pexels.com/photos/274050/pexels-photo-274050.jpeg"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5>WEAV3000</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Underwater Basket Weaving
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
