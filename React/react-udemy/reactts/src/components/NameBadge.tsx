
type NameBadgeProps = {
    name: string,
    onChange: any
};

const NameBadge = ({ name, onChange }: NameBadgeProps) => {
    return (
        <div>
            <input type="text" onChange={(e) => onChange(e.target.value)} />
            <h1>Hello {name}</h1>
        </div>
    )
}

export default NameBadge
