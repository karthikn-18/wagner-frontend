import React, { useEffect } from 'react'

const Dashboard = () => {
    // const token = useUserStore(state => state?.login)
    // console.log(token, "token");
    useEffect(() => {
        window.scrollTo(0, 0);
        // window.location.reload();
    }, [])
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard