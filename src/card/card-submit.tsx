

export const CardSubmit = ({ valor }: { valor: number | null }) => {
    return (
        <div className="bg-[#1F2630] w-[30em] rounded-4xl p-9">
            <div className="flex items-center justify-center mx-auto">
                <img src="/submit.png" alt="Imagen de formulario enviado" className="size-44" />
            </div>
            <div className="flex flex-col gap-8 mt-10">
                <div className="px-10 py-2 bg-[#252F39] rounded-full w-fit mx-auto">
                    <p className="text-[#FC7613]">You select {valor !== null ? valor + 1 : 0} out of 5</p>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-white">Thank you!</h2>
                    <p className="text-neutral-500 mt-3">We appreciate you taking the time to five a rating. If you ever need more support, don`t hesitate to get in touch!</p>
                </div>
            </div>
        </div>
    )
}

