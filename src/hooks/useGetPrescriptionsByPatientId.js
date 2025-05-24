

import { callGetPrescriptionsByPatientId } from 'config/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useGetPrescriptionsByPatientId = (patientId) => {
    const [prescriptions, setPrescriptions] = useState([])
    const [loading, setLoading] = useState(true)

    const getPrescriptions = async (id) => {
        try {
            const res = await callGetPrescriptionsByPatientId(id || patientId)
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
        if (patientId) {
            getPrescriptions(patientId)
        }
    }, [patientId])

    return { loading, prescriptions, getPrescriptions }
}

export default useGetPrescriptionsByPatientId