import React from 'react'
import Aheader from '../Acoman/Aheader'
import ApgeTi from '../Acoman/ApgeTi'

function Dashboard() {
    return (
        <div>
            <Aheader />
            <ApgeTi title="Dashboard" name="Dashboard" />

            <h1 className='text-center text-info'>Hello this Dashboard page</h1>
        </div>
    )
}

export default Dashboard
