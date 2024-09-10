import { FC, useState } from "react";
import './Counter.scss';
import classNames from './Counter.module.scss';

export const Counter: FC = () => {

    const [state, setState] = useState<number>(0)
    const plusOne = () => {
        setState(state + 1)
        console.log(state)
    }

    return (
        <div className={classNames.counter}>
            <p className='text'>{state}</p>
            <button className={classNames.btn} onClick={plusOne}>плюсик</button>
        </div >
    )
}
