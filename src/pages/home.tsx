import { useContext } from "react";
import Home from "src/component/home/Home";
import { StateProvider, store } from "src/utils/store";
import UserContext, { UserConsumer, UserProvider } from "src/utils/themeContext";

const WrapperHome = () => {
    return (
        <StateProvider>
            <Home />
        </StateProvider>
        );
}

export default WrapperHome;