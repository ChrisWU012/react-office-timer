import React, { useState } from 'react'
import { Modal, Button, Input } from 'react-daisyui'
import { TimePicker } from 'react-ios-time-picker';

function InputModal(props) {
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [salary, setSalary] = useState()

    const onClose = () => {
        const cur_time = new Date()
        var curr_hour = cur_time.getHours()
        var curr_min = cur_time.getMinutes()
        var curr_sec = cur_time.getSeconds()
        if (!startTime || !endTime) {
            return alert("請輪入資料")

        }
        var arr1 = startTime.split(":")
        var arr2 = endTime.split(':')
        if ((curr_hour * 3600 + curr_min * 60 + curr_sec) > (arr2[0] * 3600 + arr2[1] * 60)) {
            alert("你已經收咗工？")
        } else if ((curr_hour * 3600 + curr_min * 60 + curr_sec) < (arr1[0] * 3600 + arr1[1] * 60)) {
            alert("你仲未返工？")
        } else {
            props.getData({ startTime: startTime, endTime: endTime, salary: salary })
            props.close(false)
        }
    }

    return (
        <div>
            <Modal className='w-11/12 max-w-5xl' open={true}>
                <Modal.Header className="font-bold">
                    <span className='label-text text-2xl'>睇下你今日搵幾錢</span>
                </Modal.Header>

                <Modal.Body>
                    <div className="grid grid-cols-2">
                        <div className="m-2">
                            <span className='label-text'>幾點返工？</span>
                            <TimePicker onChange={setStartTime} value={startTime} pickerDefaultValue={"09:00"} required={true} />
                        </div>
                        <div className="m-2">
                            <span className='label-text'>幾點放工？</span>
                            <TimePicker onChange={setEndTime} value={endTime} pickerDefaultValue={"18:30"} required={true} />
                        </div>
                    </div>
                    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">幾錢人工？(非必須)</span>
                            </label>
                            <Input className={"w-full max-w-xs"} bordered={true} color={"success"} size={"lg"} placeholder={"$"} onChange={e => setSalary(e.target.value)} required={true} />
                        </div>
                    </div>
                </Modal.Body>

                <Button onClick={() => { onClose() }} color={'primary'}>確定</Button>
            </Modal>
        </div>
    )
}

export default InputModal