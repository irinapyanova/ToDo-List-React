import './date-header.css';

const DateHeader = () => {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const year = now.getFullYear();
    const month = months[now.getMonth()];
    const date = now.getDate();
    const day = daysNames[now.getDay()];

    return (
        <div className="date-wrapper">
            <div className="date-main">
                <p className="date-dd">{date}</p>
                <div className="date-mm-yy">
                    <p className="date-mm">{month}</p>
                    <p className="date-yy">{year}</p>
                </div>
            </div>

            <div className="date-day">{day}</div>
        </div>
    )
}

export default DateHeader;