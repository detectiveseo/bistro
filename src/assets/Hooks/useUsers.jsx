import { useQuery } from '@tanstack/react-query'


// TODO 
const useUsers = () => {
    fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ userId: 45465465564 })
    }).then(res => res.json())
        .then(() => {});
}

export { useUsers };