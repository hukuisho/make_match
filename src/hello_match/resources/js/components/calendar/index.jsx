import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
// import { useState, useEffect } from "react";
// import { Month } from "./components/calendar/Month";

const CalendarIndex = ({ userCarendarData }) => {
    // userCarendarDataを使用して表示する処理を記述
    console.log(userCarendarData);
    // const [currentMonth, setCurrentMonth] = useState();
    return (
        <>
            <div>
                <p>{userCarendarData["today"]}</p>
            </div>

            <div>
                
                


                <form action="index" method="post">
                    <button type="submit" id="today"> 現在に戻る
                        <input type="hidden" name="today" value="getToday" />
                    </button>
                </form>
            </div>

            {/* <Month month={currentMonth} /> */}
        </>
    );
};
export default CalendarIndex;
