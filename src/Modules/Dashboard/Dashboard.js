import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './dashboard.css'
import { v4 as uuid } from 'uuid';
import { onAdd } from '../../action';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
    const [name, setName] = useState('')
    const [score, setScore] = useState('')

    const dispatch = useDispatch()

    const [errArr, setErrArr] = useState([{
        nameErr: "",
        scoreErr: "",
    }])

    const onChange = (e) => {
        if (e.target.id === "name") {
            checkName(e.target.value)
        }

        if (e.target.id === "score") {
            checkScore(e.target.value)
        }
    }

    const checkName = (name) => {
        let nameErr = ""
        let pattern = /^([a-zA-Z ]){2,30}$/
        let valid = false

        if (name.trim() === "") {
            nameErr = "Please enter your name"
        } else if (!pattern.test(name)) {
            nameErr = "Please enter a valid name"
        } else {
            valid = true
        }

        setName(name)
        setErrArr({ ...errArr, nameErr })

        return valid
    }

    const checkScore = (score) => {
        let scoreErr = ""
        let pattern = /^\d+$/
        let valid = false

        if (score.trim() === "") {
            scoreErr = "Please enter a score"
        } else if (!pattern.test(score)) {
            scoreErr = "Please enter a valid score"
        } else {
            valid = true
        }

        setScore(score)
        setErrArr({ ...errArr, scoreErr })

        return valid
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (checkName(name) && checkScore(score)) {
            const unique_id = uuid().slice(0, 5);
            dispatch(onAdd({id: unique_id, name, score}))

            alert('Score added successfully');
            setName("")
            setScore("")
        } else {
            alert('Please check the fields again');
        }
    }

    return (
        <div className='dashboard'>
        <h3>Enter Player Name and Score</h3>
            <form>
                <TextField
                    required
                    id="name"
                    label="Player Name"
                    onChange={onChange}
                    value={name}
                    sx={{ width: "450px" }}
                />
                <p>{errArr.nameErr}</p>
                
                <br />

                <TextField
                    required
                    id="score"
                    label="Score"
                    onChange={onChange}
                    value={score}
                    sx={{ width: "450px" }}
                />
                <p>{errArr.scoreErr}</p>

                <br />

                <Button variant="contained" color="success" onClick={onSubmit}>
                    Enter
                </Button>
            </form>
            
        </div>
    )
}

export default Dashboard