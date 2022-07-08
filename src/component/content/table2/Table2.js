import React from "react";
import Table2Control from "./Table2Control";

/* table2 내용 */
/* Table2Controls을 통해 상황에 맞는 내용 표출 */
function Table2(props) {
    const param = props.what_table;
    //console.log(param);
    return (
        <div className='userInfo_detail2'>
            <Table2Control what_table={param}></Table2Control>
        </div>
    );
}

export default Table2;