import PropTypes from "prop-types"

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(booking._id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={booking.service_img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{booking.email}</td>
            <td>{booking.service_title}</td>
            <td>{booking.date}</td>
            <td>{booking.dueamount}</td>
            <th>
                {
                    booking.status === "confirm" ?
                        <p>Confirmed</p>
                        :
                        <button onClick={() => handleBookingConfirm(booking._id)} className="btn btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;

BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleBookingConfirm: PropTypes.func
}