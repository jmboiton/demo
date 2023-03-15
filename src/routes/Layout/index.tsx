import Header from "components/Header";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { routes } from "routes/router";

function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => {
      return route.path === location.pathname || route.path === "/*";
    }) ?? {};

  return (
    <div className="flex min-h-screen w-screen flex-col overflow-hidden bg-beige-100">
      <Header>The Coffee Shop</Header>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={600}
          classNames="page"
          appear
          in
        >
          {(state) => {
            return (
              <div ref={nodeRef} className="page flex flex-1 justify-center">
                {currentOutlet}
              </div>
            );
          }}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default Layout;
