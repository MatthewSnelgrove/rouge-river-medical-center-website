import AppointmentType from './AppointmentType';
import Header from './Header';
const TypesOfAppointments = () => {
    return (
        <div>
            <Header title='Types of Appointments' />
            <div className='content'>
                <div className='row justify-content-center'>
                    <AppointmentType apptType='Regular Hours Office Appointment' />
                    <AppointmentType apptType='Urgent Same-day Appointment'
                    apptDisc='Some appointment slots are saved each day for urgent care requests. These slots cannot be booked until that day.' />
                </div>
                <div className='row justify-content-center'>
                    <AppointmentType apptType='Annual Health Exams'
                    apptDisc='These appointments ensure extra time to discuss healthy living and preventative care.' />
                    <AppointmentType apptType='After-hours Appointments'
                    apptDisc='Monday to Thursday evenings 5:00 PM - 8:00 PM and most Saturday mornings 9:00 AM - Noon. These appointments occur in the office of the physician on call for the group.' />
                </div>
            </div>
        </div>
    )
}
export default TypesOfAppointments;