import QPICK from "../../../assets/QPICK.svg"

interface LogoProps {
    className: string; // Определение типа для свойства className
}
const Logo = (props: LogoProps) => {
    return (
        <div className={`Logo ${props.className}`}>
            <img src={QPICK} alt="QPICK"/>
        </div>
    );
};

export default Logo;