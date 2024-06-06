
type NameBadgeProps = {
    name: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
};

const NameBadge = ({ name, onChange }: NameBadgeProps) => {
    return (
        <div>
            <input type="text" onChange={onChange} />
            <h1>Hello {name}</h1>
        </div>
    )
}

export default NameBadge
