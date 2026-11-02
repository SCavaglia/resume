import { useEffect, useState } from 'react';

export function BgProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function updateProgress() {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percentage =
                scrollableHeight > 0
                    ? (window.scrollY / scrollableHeight) * 100
                    : 0;

            setProgress(percentage);
        }

        updateProgress();

        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return (
        <div className="fixed inset-x-0 top-0 z-[100] h-0.5">
            <div
                className="h-full bg-linear-to-r from-yellow-400 via-orange-500 to-red-600 opacity-50 transition-[width] duration-0 ease-in-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
