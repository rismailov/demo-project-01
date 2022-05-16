export default function Badge({ emoji, text, style }) {
    return (
        <div
            className="p-4 shadow-xl text-sm bg-white text-primary rounded-lg inline-flex items-center"
            style={style || {}}
        >
            <div className="mr-2">{emoji}</div>

            {text}
        </div>
    );
}
