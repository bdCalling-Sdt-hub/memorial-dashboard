import { Spin } from 'antd';

interface SpinnerProps{
    size?: "small" | "default" | "large";
}

const Spinner:React.FC<SpinnerProps> = ({size}) => {
    return (
        <Spin size={size} />
    )
}

export default Spinner