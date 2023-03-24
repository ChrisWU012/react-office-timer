import React, { useState, useEffect } from 'react'
import { Modal, Button, Input } from 'react-daisyui'
import { TimePicker } from 'react-ios-time-picker';

function InputModal(props) {
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()

    const [salary, setSalary] = useState()

    useEffect(() => {
        props.getData({
            startTime: startTime,
            endTime: endTime,
            salary: salary
        })
    },
        [startTime, endTime, salary])

    return (
        <div>
            <Modal className='w-11/12 max-w-5xl' open={true}>
                <Modal.Header className="font-bold">
                    睇下你今日搵幾錢
                </Modal.Header>

                <Modal.Body>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="grid grid-cols-2">

                            <div className="m-2">
                                <TimePicker placeholder={"幾點返工？"} onChange={setStartTime} value={startTime} pickerDefaultValue={"08:00"} />
                            </div>
                            <div className="m-2">
                                幾點放工？
                                <TimePicker onChange={setEndTime} value={endTime} pickerDefaultValue={"23:30"} />
                            </div>

                        </div>
                        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">幾錢人工？(非必須)</span>
                                </label>
                                <Input className={"w-full max-w-xs"} bordered={true} color={"success"} size={"lg"} placeholder={"$"} onChange={e => setSalary(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Button onClick={props.close} color={'primary'}>確定</Button>
            </Modal>
        </div>
    )
}

export default InputModal