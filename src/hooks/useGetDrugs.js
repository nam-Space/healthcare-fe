
import { useEffect, useState } from "react"
import { callGetDrugs } from "config/api";
import { toast } from "react-toastify";

const useGetDrugs = (query = null) => {
    const [drugs, setDrugs] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllDrugs = async (subQuery = null) => {
        try {
            const res = await callGetDrugs(subQuery || query)
            if (res) {
                setDrugs(res)
            }

        } catch (error) {
            toast.error(
                `Mất kết nối`,
                {
                    position: "bottom-right",
                }
            );
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllDrugs()
    }, [])

    return { loading, drugs, getAllDrugs }
}

export default useGetDrugs