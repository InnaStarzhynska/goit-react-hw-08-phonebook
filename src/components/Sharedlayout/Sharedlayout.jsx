import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectLoggedIn } from "redux/selectors";
import { Header, Wrapper } from "./Sharedlayout.styled";


export function Sharedlayout() {
    const isLoggedIn = useSelector(selectLoggedIn);
  return (
      <Wrapper>
      <Header>
          <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </Header>
          <Outlet />
      </Wrapper>
  )
}
