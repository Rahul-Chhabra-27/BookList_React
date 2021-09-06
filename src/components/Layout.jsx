import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Header from './Header';
import Table from './Table';

const Layout = () => {
    const style = useSelector(state => state.ui.style);
    const show = useSelector(state => state.ui.isFormVisible);
    return(
        <div className="container mt-4">
            <Header style = {style} />
            {show && <Form />}
            <Table/>
        </div>
    )
}
export default Layout