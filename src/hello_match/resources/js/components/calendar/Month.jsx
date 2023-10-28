import React from "react";

export const Month = (props) => {
    const { month } = props;
    return (
      <div>
        <p>aaaa</p>
        {/* {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))} */}
      </div>
    );
  };


  export default Month;