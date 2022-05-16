export default function Button({ type, children, className }) {
    return (
        <button type={type || 'button'} className={className}>
            {children || 'Button'}
        </button>
    );
}
