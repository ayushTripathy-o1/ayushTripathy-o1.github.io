import { useEffect, useState } from "react"

const GlobalFooter = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        const update = () => {
            setTime(
                new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                })
            );
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <footer className="flex flex-col gap-2 mt-8 py-8 text-center text-sm font-jetbrains font-semibold text-neutral-300">
            <p>[ &copy; {new Date().getFullYear().toString()} Ayush Tripathy ]</p>
            <p>[ Time: {time} ]</p>
        </footer>
    )
}

export default GlobalFooter
