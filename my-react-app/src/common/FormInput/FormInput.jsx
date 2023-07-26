import { useState } from "react";
import usePasswordToggle from "../../customHooks/usePasswordToggle";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, onChange, id, ...inputProps } = props;
    const [inputType, Icon] = usePasswordToggle()

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="form-block">
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            {/* {inputProps.type === "password" && (
                <div className="password-eye">{Icon}</div>
            )} */}
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;