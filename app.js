import axios from "axios"

async function getData(user_id){
    const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)
    const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id)

    return new Promise((resolve,reject) => {
        resolve([users,post])
    })
    
}
export default getData
