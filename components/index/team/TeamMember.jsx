import Image from 'next/image';

export default function TeamMember({ name, position, url }) {
    return (
        <>
            <div className="w-full h-75 relative">
                {url && (
                    <Image
                        src={url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority={true}
                    />
                )}
            </div>

            {/* team member description */}
            <div className="flex flex-col items-start p-3">
                <h4 className="mt-3 mb-1 font-bold">{name}</h4>
                <h6 className="text-l-text dark:text-d-text text-sm">{position}</h6>
            </div>
        </>
    );
}
