export default function Container({ children }) {
    return (
        <div className="max-w-[1100px] flex flex-col mx-auto bg-white shadow-md min-h-screen">
            {children}
        </div>
    )
}
