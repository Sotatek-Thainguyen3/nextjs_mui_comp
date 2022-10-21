import { useContext } from "react";
import { StateProvider, store } from "src/utils/store";
import UserContext, { UserConsumer, UserProvider } from "src/utils/themeContext";

const Home = () => {
    return (
        <StateProvider>
            <Home />
        </StateProvider>
        );
}

export default Home;