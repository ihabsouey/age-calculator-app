import React from 'react'
import logo from '../images/icon-arrow.svg'
import './Age.css'
export default function Age() {
    const [day, setDay] = React.useState(1)
    const [month, setMonth] = React.useState(1)
    const [year, setYear] = React.useState(1900)
    const [years, setYears] = React.useState(0)
    const [months, setMonths] = React.useState(0)
    const [days, setDays] = React.useState(0)
    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState('')
    const calculate = () => {
        if (day > 0 && day < 32 && month > 0 && month < 13 && year > 0) {
            const date = new Date()
            const currentDay = date.getDate()
            const currentMonth = date.getMonth() + 1
            const currentYear = date.getFullYear()
            let years = currentYear - year
            let months = currentMonth - month
            let days = currentDay - day
            if (months < 0) {
                years--
                months += 12
            }
            if (days < 0) {
                months--
                days += 30
            }
            setYears(years)
            setMonths(months)
            setDays(days)
            setError(false)
        } else {
            setError(true)
            setErrorText('Please enter a valid date')
        }
    }
    React.useEffect(() => {
        calculate()
    }, [day, month, year])


    return (
        <div className='container'>
            <div className='inputs'>
                <div className='input'>
                    <label className='inputLabel' htmlFor='Day'>Day</label>
                    <input className='inputInput' type='number' id='Day' value={day} onChange={(event)=>setDay(event.target.value)} />
                </div>
                <div className='input'>
                    <label className='inputLabel'  htmlFor='Month'>Month</label>
                    <input className='inputInput' type='number' id='Month'  value={month} onChange={(event)=>setMonth(event.target.value)}/>
                </div>
                <div className='input'>
                    <label className='inputLabel'  htmlFor='Year'>Year</label>
                    <input className='inputInput' type='number' id='Year'  value={year} onChange={(event)=>setYear(event.target.value)}/>
                </div>
                {/* <button className='btnArrow'>
                    <img className='imgArrow' src={logo} alt='logo' />
                </button> */}
                {error && <p className='error'>{errorText}</p>
                }

            </div>
            <div className='outputs'>
                <div className='output'>
                    <label className='outputOutput'> {years? years : "--" } </label>
                    <label className='outputTitle'>Years</label>
                </div>
                <div className='output'>
                    <label className='outputOutput'> {months? months : "--" } </label>
                    <label className='outputTitle'>Months</label>
                </div>
                <div className='output'>
                    <label className='outputOutput'>{days? days : "--" }</label>
                    <label className='outputTitle'>Days</label>
                </div>

            </div>
        </div>

    )
}
