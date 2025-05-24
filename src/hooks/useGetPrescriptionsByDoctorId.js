

import { callGetPrescriptionsByDoctorId } from 'config/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useGetPrescriptionsByDoctorId = (doctorId) => {
    const [prescriptions, setPrescriptions] = useState([])
    const [loading, setLoading] = useState(true)

    const getPrescriptions = async (id) => {
        try {
            const res = await callGetPrescriptionsByDoctorId(id || doctorId)
            if (res) {
                setPrescriptions(res)
            }
            setLoading(false)
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
        if (doctorId) {
            getPrescriptions(doctorId)
        }
    }, [doctorId])

    return { loading, prescriptions, getPrescriptions }
}

export default useGetPrescriptionsByDoctorId