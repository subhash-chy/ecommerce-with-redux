import { Footer, Nav } from "../../components";

function MainLayout(props) {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
