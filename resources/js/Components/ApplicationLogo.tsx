export default function ApplicationLogo({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="url(#paint0_linear)" />
            <path d="M30 40C30 35.5817 33.5817 32 38 32H62C66.4183 32 70 35.5817 70 40V60C70 64.4183 66.4183 68 62 68H38C33.5817 68 30 64.4183 30 60V40Z" fill="white" />
            <path d="M40 50C40 44.4772 44.4772 40 50 40C55.5228 40 60 44.4772 60 50C60 55.5228 55.5228 60 50 60C44.4772 60 40 55.5228 40 50Z" fill="#6875F5" />
            <defs>
                <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5A67D8" />
                    <stop offset="1" stopColor="#2D3A8C" />
                </linearGradient>
            </defs>
        </svg>
    );
}
