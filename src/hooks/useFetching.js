import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            console.error(error)
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, errorMessage]
}