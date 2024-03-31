import React, {HTMLAttributes} from "react";

interface IconProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({src, className, ...rest}) => {
    return (
        <img src={src} className={className} {...rest} />
    );
};

export default Icon;