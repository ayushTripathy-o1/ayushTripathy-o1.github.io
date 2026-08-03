import { useEffect, useRef, useState } from "react";

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
            <dialog
                ref={dialogRef}
                className="fixed inset-0 m-auto p-0 border-0 bg-transparent backdrop:bg-black/90 no-scrollbar overflow-hidden"
            >
                <div className="min-h-screen flex items-center justify-center">
                    <div className="inline-flex flex-col items-center">
                        {activeImage && (
                            <img
                                src={activeImage}
                                alt="Image"
                                className="block max-w-[90vw] max-h-[90vh] object-contain"
                            />
                        )}

                        <button
                            onClick={closeModal}
                            className="mt-2 text-blue-400 hover:text-blue-500 cursor-pointer font-bold"
                        >
                            [ Close ]
                        </button>
                    </div>
                </div>
            </dialog>
            <div className="border-2 border-slate-200 object-cover transition-transform duration-300 ease-in-out hover:scale-105">
                <button className="cursor-pointer" onClick={() => setActiveImage(imgSrc)}> <img src={imgSrc} alt="Image" width={600} /> </button>
            </div>
        </>
    )
}

export default ProjectImageComponent
