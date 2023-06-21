import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Components/Proveiders/AuthProviders";


const useAddToCart = () => {
    const { user } = useContext(AuthContext);
    const {data: carts = [] , refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const responce = await (fetch(`http://localhost:5000/added-items/${user?.email}`))
            return responce.json();
        }
    })

    return { carts, refetch };
}

export default useAddToCart
