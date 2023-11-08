import { WatchItemProp } from "../types"
import { useEffect, useState } from "react";
import './watchItem.css'
import moment from 'moment'
import 'moment/locale/ru';

export default function WatchItem(prop: WatchItemProp) {
    const { watch, deleteWatch } = prop
    let [time, setTime] = useState('loading')
    let timeout: number;

    function newTime(){
        setTime(moment().utc().add(watch.timeZone, 'hour').format('LTS'))
    }

    useEffect(()=>{
        setTimeout(()=>{
            newTime()
        }, 1000 - watch.id%1000)
    }, []) //didMount

    useEffect(()=>{ //didUpdated
        timeout = window.setTimeout(newTime, 1000)
        return ()=>{
            clearTimeout(timeout)
        }
    }, [time])

    return (
        <div className='watchItem'>
            <p>{watch.name + ' (UTC ' + watch.timeZone + ')'}</p>
            <p>{time}</p>
            <div className='watchItemDelete'>
                <button onClick={()=>{deleteWatch(watch.id)}}>✖</button>
            </div>
        </div>
    )
}