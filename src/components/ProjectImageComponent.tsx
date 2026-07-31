import { useEffect, useRef, useState } from "react";
import { LuX } from "react-icons/lu";

type ProjectImageComponentProps = { imgSrc: string };
const ProjectImageComponent = ({ imgSrc }: ProjectImageComponentProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [activeImage, setActiveImage] = useState<string>("");

    useEffect(() => {
        if (!activeImage) return;
        dialogRef.current.showModal();
        document.body.style.overflow = 'hidden';
        dialogRef.current?.addEventListener('close', closeModal);
        return () => {
            dialogRef.current?.removeEventListener('close', closeModal);
        }
    }, [activeImage]);

    function closeModal() {
        dialogRef.current.close();
        setActiveImage("");
        document.body.style.overflow = '';
    }

    return (
        <>
            <dialog ref={dialogRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0 border-0 bg-transparent overflow-visible backdrop:bg-black/90">
                <div className="relative z-0 max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                    {activeImage && (
                        <img
                            src={activeImage}
                            alt="Image"
                            className="block max-w-full max-h-[90vh] object-contain"
                        />
                    )}
                </div>
                <button className="absolute -top-2 -right-2 z-10 flex items-center justify-center w-7 h-7 bg-[#1a1919] rounded-full shadow cursor-pointer" onClick={closeModal}>
                    <LuX className="h-6 w-6 text-blue-400 font-medium" />
                    <span className="sr-only">Close</span>
                </button>
            </dialog>
            <div className="border-2 border-slate-200 object-cover transition-transform duration-300 ease-in-out hover:scale-105">
                <button className="cursor-pointer" onClick={() => setActiveImage(imgSrc)}> <img src={imgSrc} alt="Image" width={600} /> </button>
            </div>
        </>
    )
}

export default ProjectImageComponent
