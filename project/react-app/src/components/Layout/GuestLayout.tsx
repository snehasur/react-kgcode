import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GuestHeader from "./GuestHeader";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../store/authSlice";
import MainHeader from "./MainHeader";
const GuestLayout = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector(isAuthenticated);

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/dashboard");
    }
  }, [isUserLoggedIn]);

  return (
    <>
      <main>
        <MainHeader />
        <Container>
          <section className="section register min-vh-100  flex-column align-items-center justify-content-center py-4">
            <Container>
              <div className="row justify-content-center">
                <div className="col-lg-6 flex-column align-items-center justify-content-center">
                  <div className="justify-content-center py-4">
                    <Card className="mb-3">
                      <Card.Body>
                        <Outlet />
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default GuestLayout;
