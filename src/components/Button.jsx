/* eslint-disable react/prop-types */

export default function Button({onClick,children,className}){
    return <button className={`rounded-md bg-slate-100  mx-auto text-slate-950 border-[1px] border-slate-500 hover:bg-slate-200 px-3 py-2 w-max ${className}`} onClick={onClick}>{children}</button>
    
}