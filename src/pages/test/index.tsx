import TestComp from "src/component/test/TestComp";
import { UserProvider } from "src/utils/themeContext";

const Test = () => {
    return (<UserProvider value={{ a: '123' }}>
        <TestComp />
    </UserProvider>);
}

export default Test;