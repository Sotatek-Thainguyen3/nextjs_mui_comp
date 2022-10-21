import { useContext } from "react";
import UserContext from "src/utils/themeContext";

const Test_2 = () => {
    const props = useContext(UserContext);
    console.log(props);
    return ( <></> );
}
 
export default Test_2;