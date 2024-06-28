import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    margin?: boolean;
};

export default function Container({ children, className, margin }: ContainerProps) {
    return (
        <div className={`max-w-screen-xl mx-auto px-5 space-y-8 ${className} ${margin && "my-20"}`}>
            {children}
        </div>
    );
}
