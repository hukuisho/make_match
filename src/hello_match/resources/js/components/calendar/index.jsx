import React from "react";
import ReactDOM from "react-dom/client";
const CalendarIndex = ({ calendarData }) => {
    // calendarDataを使用して表示する処理を記述
    console.log(calendarData);
    return (
        <>
            <div>
                {calendarData.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
export default CalendarIndex;
