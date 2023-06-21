import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Proveiders/AuthProviders";


const useAddToCart = () => {
    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(1)
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const responce = await (fetch(`http://localhost:5000/added-items/${user?.email}/?limit=${limit} && skip=${skip}`))
            return responce.json();
        }
    })

    return { carts, refetch, setLimit, setSkip, limit, skip};
}

export default useAddToCart
