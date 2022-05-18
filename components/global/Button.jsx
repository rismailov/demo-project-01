export default function Button({ type, children, className, ...leftOver }) {
    return (
        <button type={type || 'button'} className={className} {...leftOver}>
            {children || 'Button'}
        </button>
    );
}
