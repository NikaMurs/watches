import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import './watchesForm.css'
import { WatchesFormProp } from '../types';


export default function WatchesForm(props:WatchesFormProp){
    const {newWatch} = props;

    const [form, setForm] = useState({
        id: 0,
        name: '',
        timeZone: 0,
    });

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        newWatch(form)
    }

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setForm(prevForm => ({ ...prevForm, [name]: value}));
    }

    return (
        <form className="watchesForm" onSubmit={onSubmit}>
            <div className="inputBox">
                <label htmlFor="name">Название</label>
                <input type="text" required id="name" name="name" value={form.name} onChange={onChange} />
            </div>
            <div className="inputBox">
                <label htmlFor="watchesTimeZone">Временная зона</label>
                <input type="number" required min={-12} max={12} id="timeZone" name="timeZone" value={form.timeZone} onChange={onChange} />
            </div>
            <button className="watchesFormSubmit">Добавить</button>
        </form>
    )
}