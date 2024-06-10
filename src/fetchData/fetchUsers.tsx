import axios from "axios"


const FetchData = async () => {
    
    try {

        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
        return data

    }
    catch {
        throw new Error(`No data for Users`)
    }

}
export default FetchData