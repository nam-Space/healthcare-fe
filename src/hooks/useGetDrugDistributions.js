
import { callGetDrugDistributions } from "config/api";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useGetDrugDistributions = (query = null) => {
    const [drugDistributions, setDrugDistributions] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllDrugDistributions = async (subQuery = null) => {
        try {
            const res = await callGetDrugDistributions(subQuery || query)
            if (res) {
                setDrugDistributions(res)
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
        getAllDrugDistributions()
    }, [])

    return { loading, drugDistributions, getAllDrugDistributions }
}

export default useGetDrugDistributions