import { Footer } from "../../components";
function DefaultLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
