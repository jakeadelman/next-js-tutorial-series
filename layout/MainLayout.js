import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const layoutStyle = {
  margin: 20,
  padding: 20
};

const MainLayout = props => (
  <div style={layoutStyle}>
    <NavBar />
    <div>{props.children}</div>
    <style jsx global>
      {`
        body {
          font: 11px menlo;
        }
      `}
    </style>
  </div>
);

export default MainLayout;
