
import { useEffect, useState } from "react"
import { callGetDoctors } from "config/api";
import { toast } from "react-toastify";

const useGetDoctors = (query = null) => {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllDoctors = async (subQuery = null) => {
        try {
            const res = await callGetDoctors(subQuery || query)
            if (res) {
                setDoctors(res)
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
        getAllDoctors()
    }, [])

    return { loading, doctors, getAllDoctors }
}

export default useGetDoctors