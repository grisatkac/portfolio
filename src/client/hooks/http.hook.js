import { useCallback, useState } from "react"

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = useCallback(async (url,  method = 'GET',body = null, headers = {}) => {
        try {
            setLoading(true)

            if (body) {
                body = JSON.stringify(body)
                headers = {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            }

            const response = await fetch(url, { method, body, headers })
            
            if (!response.ok) {
                //return 'Ошибка при запросе'
                //throw new Error(`Ошибка при запросе: ${response.statusText}`)
            }

            const data = await response.json()
            
            setLoading(false)
            
            return data
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }

    }, [])

    return { request, error, request }

}

export default useHttp