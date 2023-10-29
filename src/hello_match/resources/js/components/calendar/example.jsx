import React,{Fragment,useState} from 'react';
import ReactDOM from 'react-dom';

function Example(){
     // 選択で変更されるためuseStateで年度と月で指定
     const [year,setYear] = useState(new Date().getFullYear());
     // getMonthの0からスタートするので、+1
     const [month,setMonth] = useState(new Date().getMonth() + 1);
     // カレンダーを指定
     const calendar = CreateCalendar(year,month);

    //  年月の最後の日付を取得
     const last = new Date(year,month,0).getDate();
    //  前月の最終日を取得
     const plevLast = new Date(year,month-1,0).getDate();

     
     // オンクリック時の翌月、前月変化の操作
     const onClick = n => () => {
         const nextMonth = month + n
         if (12 < nextMonth) {
             // 13月になったら翌年の1月に
             setMonth(1)
             setYear(year + 1)
         } else if (nextMonth < 1) {
             // 0月になったら前年の12月
             setMonth(12)
             setYear(year -1)
         } else {
             setMonth(nextMonth)
         }
     }     

    return (
        // カレンダーの表示
        <React.Fragment>
            <div className='calendar'>
                <div className="calendar-header">
                    <h1>{year}{'年'} {month}{'月'}</h1>
                    <div className="calendar-nav">
                        <button onClick={onClick(-1)}>{'<先月'}</button>
                        <button onClick={onClick(1)}>{'翌月>'}</button>
                    </div>
                </div>
                <table className="clender-table">
                    <thead>
                        <tr>
                            <th>日</th>
                            <th>月</th>
                            <th>火</th>
                            <th>水</th>
                            <th>木</th>
                            <th>金</th>
                            <th>土</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calendar.map((week,i) => (
                            <tr key={week.join('')}>
                                {week.map((day,j) => (
                                    <td key={'${i}${J}'} id={day} >
                                        <div>
                                            <div>
                                                {day > last ? day - last : day <=0 ? plevLast + day : day}
                                            </div>
                                            <div className="schedule-area">
                                            </div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

function CreateCalendar(year,month){
    // 月初めの曜日を取得
    const first = new Date(year,month -1,1).getDay()
    // 1か月に5週を超えることがないため配列を設定
    return [0,1,2,3,4,5].map((weekIndex) => {
        // 1週は7曜日なので7で配列を設定
        return[0,1,2,3,4,5,6].map((dayIndex) => {
            const day = dayIndex + 1 + weekIndex * 7
            return day - first
        })
    })
}

export default Example;