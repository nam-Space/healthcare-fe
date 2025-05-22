import { callGetAppointmentByPatientId } from 'config/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useGetAppointmentByPatientId = (patientId) => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)

    const getAppointments = async (id) => {
        try {
            const res = await callGetAppointmentByPatientId(id || patientId)
            if (res) {
                setAppointments(res)
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
            getAppointments(patientId)
        }
    }, [patientId])

    return { loading, appointments, getAppointments }
}

export default useGetAppointmentByPatientId