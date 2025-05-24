
import { callGetAppointmentsByDoctorId } from 'config/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useGetAppointmentsByDoctorId = (doctorId) => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)

    const getAppointments = async (id) => {
        try {
            const res = await callGetAppointmentsByDoctorId(id || doctorId)
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
        if (doctorId) {
            getAppointments(doctorId)
        }
    }, [doctorId])

    return { loading, appointments, getAppointments }
}

export default useGetAppointmentsByDoctorId