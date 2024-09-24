import { Link } from "react-router-dom";

// all photos royalty-free

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1/Home"
          >
            <img
              src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"
              width={200}
            />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2/Home"
          >
            <img
              src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg"
              width={200}
            />
            <div>
              <h5>CS2500</h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3/Home"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1669077047112-27a604f93f31"
              width={200}
            />
            <div>
              <h5>LING1100</h5>
              <p className="wd-dashboard-course-title">
                Introduction to Linguistics
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4/Home"
          >
            <img
              src="https://images.unsplash.com/photo-1532457573542-37fe94c98cf2"
              width={200}
            />
            <div>
              <h5>GAME2500</h5>
              <p className="wd-dashboard-course-title">
                Introduction to Game Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5/Home"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1714618937022-97adf8e67cb6"
              width={200}
            />
            <div>
              <h5>CS4600</h5>
              <p className="wd-dashboard-course-title">Operating Systems</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/6/Home"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500"
              width={200}
            />
            <div>
              <h5>PHIL1300</h5>
              <p className="wd-dashboard-course-title">
                Knowledge in the Digital World
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/7/Home"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce"
              width={200}
            />
            <div>
              <h5>CS35000</h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Design ^ 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/8/Home"
          >
            <img
              src="https://images.pexels.com/photos/274050/pexels-photo-274050.jpeg"
              width={200}
            />
            <div>
              <h5>WEAV3000</h5>
              <p className="wd-dashboard-course-title">
                Underwater Basket Weaving
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
