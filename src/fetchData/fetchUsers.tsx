import axios from "axios"
import React from "react"

const fetchData:React.FC<[]> = async ({ queryKey }) => {
    const id = queryKey[1]
    try {

        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id ? id : ''}`)
        return data
    }
    catch {
        throw new Error(`No data for ${id ? id : "users"}`)
    }

}
export default fetchData