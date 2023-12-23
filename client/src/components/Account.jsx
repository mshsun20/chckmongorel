import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import server from '../Server'
import axios from 'axios'

const Account = () => {
    let name, value
    const [vl, setVl] = useState()
    const [dpt, setDpt] = useState()
    const [dsg, setDsg] = useState()
    const navig = useNavigate()

    const getdet = async () => {
        try {
            const res = await axios.get(`${server}/dept/read`)
            const res2 = await axios.get(`${server}/desig/read`)
            const data = await res.data
            const data2 = await res2.data
            console.log(data)
            console.log(data2)
            setDpt(data.data)
            setDsg(data2.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getdet()
    }, [])

    const hndlinp = (e) => {
        name = e.target.name
        value = e.target.value
        setVl({...vl, [name]:value})
    }

    const hndlsub = async (e) => {
        e.preventDefault()
        const {accname, accphn, accemail, accpass, acnfpass, company, deptid, desigid, empcode} = vl

        try {
            if (acnfpass === accpass) {
                const res = await axios.post(`${server}/acc/create`, {accname, accphn, accemail, accpass, company, deptid, desigid, empcode})
                const data = await res.data
                console.log(data)
                if (data.statuscode === 200) {
                    alert(data.success)
                    navig('/')
                }
                else {
                    alert(data.error)
                }
            }
            else {
                alert('Confirm Password must be Same !')
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div>
            <div className="hdr">Add Account</div>
            <div className="frmsec">
                <form className="frm">
                    <div className="frmgrp">
                        <label htmlFor="accname">Name</label>
                        <input type="text" name="accname" id="accname" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="accphn">Phone No.</label>
                        <input type="text" name="accphn" id="accphn" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="accemail">Email Id</label>
                        <input type="text" name="accemail" id="accemail" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="accpass">Password</label>
                        <input type="password" name="accpass" id="accpass" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="acnfpass">Confirm Password</label>
                        <input type="password" name="acnfpass" id="acnfpass" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" id="company" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="deptid">Department</label>
                        <select name="deptid" id="deptid" onChange={hndlinp}>
                            <option value="0">-----select department-----</option>
                            {
                                (dpt) ? dpt.map((elm, i) => (
                                    <option value={elm._id} key={i}>{elm.deptname}</option>
                                )) : null
                            }
                        </select>
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="desigid">Designation</label>
                        <select name="desigid" id="desigid" onChange={hndlinp}>
                            <option value="0">-----select department-----</option>
                            {
                                (dsg) ? dsg.map((elm, i) => (
                                    <option value={elm._id} key={i}>{elm.designame}</option>
                                )) : null
                            }
                        </select>
                    </div>
                    <div className="frmgrp">
                        <label htmlFor="empcode">Employee Code</label>
                        <input type="text" name="empcode" id="empcode" onChange={hndlinp} />
                    </div>
                    <div className="frmgrp">
                        <input type="submit" value="Add" onClick={hndlsub} />
                    </div>
                </form>
            </div>
            <div className="upacc"><NavLink to='/upldacc'>Go to Upload page</NavLink></div>
        </div>
    </>
  )
}

export default Account