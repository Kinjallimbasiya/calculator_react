import React, { useState } from 'react'
import "./calc.scss";

export default function Calclulator() {
    const [value, setValue] = useState('');

    const handelonChange = (e) => {

        setValue(value + e.target.value);


    }
    console.log("value**********", value);
    return (
        <div>
            <div className="container">
                <div className="calculator">
                    <form action="">
                        <div className='display'>
                            <input type="text" value={value} />
                        </div>
                        <div>
                            <input type="button" value="AC" onClick={e => setValue('')} />
                            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))} />
                            <input type="button" value="." onClick={(e) => handelonChange(e)} />
                            <input type="button" value="/" onClick={(e) => handelonChange(e)} />
                        </div>
                        <div>
                            <input type="button" value="7" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="8" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="9" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="*" onClick={(e) => handelonChange(e)} />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="5" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="6" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="+" onClick={(e) => handelonChange(e)} />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="2" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="3" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="-" onClick={(e) => handelonChange(e)} />
                        </div>
                        <div>
                            <input type="button" value="00" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="0" onClick={(e) => handelonChange(e)} />
                            <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))} />
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
