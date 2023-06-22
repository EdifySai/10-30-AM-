import axios from 'axios';
const APIHOC = (Component, data) => {
    const HOCFn = () => {
        const postRequest = (apiURL, requestBody) => {
            axios.post(apiURL, requestBody);
        }
        return <Component postRequest={postRequest} />
    }
    return HOCFn;
}
export default APIHOC;
