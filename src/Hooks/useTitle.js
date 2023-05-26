import { useEffect } from "react"

export const useTitle = title => {

    useEffect(() => {
        document.title = `Play KiD - ${title}`
    }, [title])
}