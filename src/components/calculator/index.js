import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import "./calc.scss";

export default function Calculator() {
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(value + e.target.value);
    };

    const handleEqual = () => {
        try {
            setValue(evaluate(value).toString());
        } catch (error) {
            setValue('Error');
        }
    };

    return (
        <div>
            <div className="container">
                <div className="calculator">
                    <form action="">
                        <div className='display'>
                            <input type="text" value={value} readOnly />
                        </div>
                        <div>
                            <input type="button" value="AC" onClick={() => setValue('')} />
                            <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
                            <input type="button" value="." onClick={handleOnChange} />
                            <input type="button" value="/" onClick={handleOnChange} />
                        </div>
                        <div>
                            <input type="button" value="7" onClick={handleOnChange} />
                            <input type="button" value="8" onClick={handleOnChange} />
                            <input type="button" value="9" onClick={handleOnChange} />
                            <input type="button" value="*" onClick={handleOnChange} />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={handleOnChange} />
                            <input type="button" value="5" onClick={handleOnChange} />
                            <input type="button" value="6" onClick={handleOnChange} />
                            <input type="button" value="+" onClick={handleOnChange} />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={handleOnChange} />
                            <input type="button" value="2" onClick={handleOnChange} />
                            <input type="button" value="3" onClick={handleOnChange} />
                            <input type="button" value="-" onClick={handleOnChange} />
                        </div>
                        <div>
                            <input type="button" value="00" onClick={handleOnChange} />
                            <input type="button" value="0" onClick={handleOnChange} />
                            <input type="button" value="=" className='equal' onClick={handleEqual} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
