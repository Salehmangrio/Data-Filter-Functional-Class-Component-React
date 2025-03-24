import React, { Component } from 'react';
import { employees, cities } from './data';

class TableDataClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: '',
            department: '',
            city: '',
            data: []
        }
    }

    filterData = () => {
        
        const { name, age, department, city } = this.state;

        const filteredData = employees.filter(
            (employee) => (name ? employee.name.toLowerCase().includes(name.trim().toLowerCase()) : true)
                && (department ? employee.department.toLowerCase().includes(department.trim().toLowerCase()) : true)
                && (age ? employee.age === Number(age) : true)
                && (city ? employee.city === city : true)
        )
        this.setState({ data: filteredData })
    }

    componentDidMount() {
        this.filterData()
    }

    componentDidUpdate(prevProps, prevState) {
        const { name, age, city, department } = this.state;
        if (
            prevState.name !== name ||
            prevState.age !== age ||
            prevState.department !== department ||
            prevState.city !== city
        ) {
            this.filterData()
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        if (name === "name") {
            this.setState({ name: value })
        } else if (name === "age") {
            this.setState({ age: value })
        } else if (name === "department") {
            this.setState({ department: value })
        } else {
            this.setState({ city: value })
        }
    }

    clearFilter = () => {
        this.setState({
            name: "",
            age: '',
            department: '',
            city: ''
        })
    }


    render() {
        const { name, age, city, department, data } = this.state
        return (
            <div className='w-full flex flex-col  items-center'>
                <div className='text-center'>
                    <input type="text" name='name' className='bg-amber-100 rounded px-4 py-1 m-2' placeholder='name' value={name} onChange={this.handleChange} />
                    <input type="text" name='age' className='bg-amber-100 rounded px-4 py-1 m-2' placeholder='age' value={age} onChange={this.handleChange} />
                    <input type="text" name='department' className='bg-amber-100 rounded px-4 py-1 m-2' placeholder='department' value={department} onChange={this.handleChange} />
                    <select name="city" onChange={this.handleChange} value={city}>
                        <option value="" disabled>Select any city</option>
                        {
                            cities.map((city) => <option value={city}>{city}</option>)
                        }
                    </select>
                </div>

                <div className='text-center'>
                    {
                        (name || age || department || city) && <button onClick={this.clearFilter}>Clear Filters</button>
                    }
                </div>
                <table className='md:w-4/5 w-11/12 md:my-12 my-4'>
                    <tr className='bg-slate-700 text-white'>
                        <td className='px-4'>#</td>
                        <td className='px-4 py-2'>Name </td>
                        <td className='px-4 py-2'>Age</td>
                        <td className='px-4 py-2'>Department</td>
                        <td className='px-4 py-2'>City</td>
                    </tr>
                    {
                        data.length > 0 && data.map((employee, index) => <tr key={employee.id} className='bg-gray-500 text-white'>
                            <td className='px-4 py-1'>{index + 1}</td>
                            <td className='px-4 py-1'>{employee.name}</td>
                            <td className='px-4 py-1'>{employee.age}</td>
                            <td className='px-4 py-1'>{employee.department}</td>
                            <td className='px-4 py-1'>{employee.city}</td>
                        </tr>)
                    }
                </table>
            </div>
        )
    }
}

export default TableDataClass;
