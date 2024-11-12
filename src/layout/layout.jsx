import { Layout } from "antd";
import AppHeader from "./header";
import AppFooter from "./footer";
import { useLocation } from "react-router-dom";
// import AppHeader from "../components/header";
// import AppFooter from "../components/footer";
// import { FooterSectionImage } from "../assets";
// import BackToTop from "../components/back-to-top/index";

const { Header, Footer, Content } = Layout;

export default function AppLayout({ children }) {
  const location = useLocation();

  // List of paths where the header should be hidden
  const hideHeaderPaths = ["/sign-in", "/sign-up"];

  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);
  const shouldHideFooter = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      <Layout style={{}}>
        <Header
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            backgroundColor: "transparent",
          }}
          className="position-fixed fixed-top"
        >
          {!shouldHideHeader && <AppHeader />}
        </Header>

        <Content
          style={{
            margin: 0,
            padding: `0`,
            width: "100%",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          {/* <PagesMenu /> */}
          {children}
        </Content>
        {/* <BackToTop /> */}
        <Footer
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            // background: `url(${FooterSectionImage})`,
            backgroundAttachment: " fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {!shouldHideFooter && <AppFooter />}
        </Footer>
      </Layout>
    </>
  );
}
