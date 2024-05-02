import Image from 'next/image';

export const Logo = () => {
    return (
        <div className="flex items-center justify-center h-23 w-23 bg-white rounded-full shadow-md">
            <Image
                src="/logo.svg"
                alt="SkillStack Logo"
                width={130}
                height={130}
            />
        </div>
    )
}