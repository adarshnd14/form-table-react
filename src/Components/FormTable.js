import React, { useEffect, useState } from 'react'
import Form from './Form'
import Table from './Table'

function FormTable() {
    const [data, setData] = useState([])
    const LOCAL_STORAGE_KEY='data'
    useEffect(() => {
       const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
       if (retriveData) {
           setData(retriveData)
       }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
    }, [data]);

    // for (let i = 0; i < data.length; i++) {
    //     console.log( 'see-',data[i].valid);
    // }
    
    return (
        <div style={{display:"flex", justifyContent:'space-evenly'}}>
            <Form setData={setData} data={data}/>
            <Table data={data}/>
            {/* {data[0].valid?<Table data={data}/>:null} */}
        </div>
    )
}

export default FormTable
