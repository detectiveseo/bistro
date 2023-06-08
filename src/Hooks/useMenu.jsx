import { useEffect, useState } from "react"

const useMenu = (category) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const catagoryFilter = data.filter(x => x.category == { category })
                setItems(catagoryFilter)
            });
    }, [])

    return (items)
}


export default useMenu;300