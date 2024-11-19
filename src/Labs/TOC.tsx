import { useLocation } from "react-router";

export default function TOC() {
  const labs = ["Lab1", "Lab2", "Lab3", "Lab4", "Lab5"];
  const path = useLocation().pathname;
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs
        </a>
      </li>
      {labs.map((labNum) => {
        return (
          <li className="nav-item">
            <a
              id="wd-a1"
              href={`#/Labs/${labNum}`}
              className={`nav-link ${path.includes(labNum) ? "active" : ""}`}
            >
              {labNum.replace("Lab", "Lab ")}
            </a>
          </li>
        );
      })}
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/sean-seibel/kanbas-react-web-app"
          target="_blank"
          className="nav-link"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
