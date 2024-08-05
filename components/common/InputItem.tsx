import {useEffect, useState} from "react";

const InputItem = ({placeholder, inputName, inputType, inputValue}: {
    placeholder: string,
    inputName: string,
    inputType: string,
    inputValue: string
}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [inputValueState, setInputValueState] = useState('');

    useEffect(() => {
        setInputValueState(inputValue)
    }, [inputValue]);

    return (
        <div className="relative bg-neutral-700 rounded-md">
            <input
                className="relative z-10 w-full bg-transparent rounded-md pt-5 pb-2 px-4 text-white duration-200 focus:outline focus:outline-[1.5px] focus:outline-white outline-offset-2"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setInputValueState(e.target.value)}
                type={inputType}
                name={inputName}
                value={inputValue}
                autoComplete="off"
                required
            />
            <div className={`absolute left-4 font-light text-neutral-200 duration-200
            ${isFocused || inputValueState!==""?"text-[12px] top-1":"text-[16px] top-1/2 -translate-y-1/2"}
            `}>{placeholder}</div>
        </div>
    )
}

export default InputItem;