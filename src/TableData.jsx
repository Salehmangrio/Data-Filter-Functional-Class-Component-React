import React, { useEffect, useState } from 'react'
import { employees, cities } from './data'

const TableData = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");
    const [city, setCity] = useState("");

    const [data, setData] = useState([]);

    useEffect(
        () => {
            const filterData = employees.filter(
                (emp) => (name ? emp.name.toLowerCase().includes(name.trim().toLowerCase()) : true) &&
                    (department ? emp.department.toLowerCase().includes(department.trim().toLowerCase()) : true) &&
                    (city ? emp.city == city : true) &&
                    (age ? emp.age === Number(age) : true)
            )
            setData(filterData)
        },
        [name, age, department, city]
    )
    return (
        <div>
            <div className='w-full text-center'>
                <input className='bg-sky-800 border text-white px-2 py-1 rounded w-[200px] outline-none mx-auto placeholder:text-white' type="text" name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                <input className='bg-sky-800 border text-white px-2 py-1 rounded w-[200px] outline-none mx-auto placeholder:text-white' type="text" name='age' placeholder='Age' value={age} onChange={e => setAge(e.target.value)} />
                <input className='bg-sky-800 border text-white px-2 py-1 rounded w-[200px] outline-none mx-auto placeholder:text-white' type="text" name='department' placeholder='Department' value={department} onChange={e => setDepartment(e.target.value)} />
                <br />
                <select name="city" value={city} onChange={e => setCity(e.target.value)} className='w-[200px] py-1 outline-none bg-emerald-900 text-white my-2 px-2 rounded'>
                    <option value='' disabled>Select a city</option>
                    {
                        cities.map((city, index) => <option key={index} value={city}>{city}</option>)
                    }
                </select>
            </div>
            {
                (name || age || department || city)
                &&
                <div className='w-full text-center py-2'>
                    <button className='bg-red-500 text-white  px-6 py-1 rounded-xl' onClick={
                        () => {
                            setName(""); setAge(""); setDepartment(""), setCity("");
                        }
                    }>Clear filters</button>
                </div>
            }
            {
                data.length > 0 ?
                    <table className='mx-auto my-3'>
                        <thead className='bg-slate-800 text-white'>
                            <tr>
                                <th className='border  px-4 py-2'>#</th>
                                <th className='border  px-4 w-[200px] py-2'>Name</th>
                                <th className='border  px-4 w-[200px] py-2'>Age</th>
                                <th className='border  px-4 w-[200px] py-2'>Department</th>
                                <th className='border  px-4 w-[200px] py-2'>City</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-500 text-white'>
                            {
                                data?.map(({ id, name, age, city, department }, index) => <tr key={id}>
                                    <td className='px-2 border'>{(index + 1)}</td>
                                    <td className='px-2 border'>{name}</td>
                                    <td className='px-2 border'>{age}</td>
                                    <td className='px-2 border'>{department}</td>
                                    <td className='px-2 border'>{city}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                    : <h1 className='text-center font-extrabold font-serif text-4xl py-10 bg-amber-200 my-10 mx-4 rounded-bl-full rounded-tr-full '>Data not found!!!</h1>
            }
        </div>
    )
}

export default TableData