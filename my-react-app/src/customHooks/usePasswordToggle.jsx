import { useState } from "react"

const usePasswordToggle = () => {
    const [isVisible, setIsVisible] = useState(false)

    const Icon = <i onClick={() => setIsVisible(prev => !prev)} class={`fa-solid ${isVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>

    const inputType = isVisible ? 'text' : 'password'

    return [inputType, Icon]
}

export default usePasswordToggle