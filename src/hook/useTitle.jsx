import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Hero's Toys`
    }, [title])
}

export default useTitle;