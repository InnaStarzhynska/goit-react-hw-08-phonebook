import AuthNav from "components/AuthNav/AuthNav"
import Navigation from "components/Navigation/Navigation"
import UserMenu from "components/UserMenu/UserMenu";
import { Wrapper } from "./AppBar.styled";

export function AppBar() {

    return (
        <Wrapper>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Wrapper>
    );
}