
import { callGetPatients } from "config/api";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useGetPatients = (query = null) => {
    const [patients, setPatients] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllPatients = async (subQuery = null) => {
        try {
            const res = await callGetPatients(subQuery || query)
            if (res) {
                setPatients(res)
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
        getAllPatients()
    }, [])

    return { loading, patients, getAllPatients }
}

export default useGetPatients