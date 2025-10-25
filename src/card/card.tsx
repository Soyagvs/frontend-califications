import { useState } from "react"
import { StarIcon } from "../heroicons/star-icon"
import { CardSubmit } from "./card-submit"

const numberArray = [
    {
        number: 1
    },
    {
        number: 2
    },
    {
        number: 3
    },
    {
        number: 4
    },
    {
        number: 5
    },

]

export const Card = () => {
    const [select, setSelect] = useState<number | null>(null)
    const [submit, setSubmit] = useState<boolean>(false)

    const handleSelect = (index: number) => {
        setSelect(select === index ? null : index)
    }

    const handleSubmit = () => {
        setSubmit(true)
    }

    if (submit) {
        return <CardSubmit valor={select} />
    }

    return (
        <div className="bg-[#1F2630] sm:w-[30em] w-[90%] rounded-4xl sm:p-9 p-5">
            <div className="size-15 bg-[#252F39] rounded-full flex items-center justify-center">
                <StarIcon />
            </div>
            <div className="flex flex-col gap-8 mt-10">
                <h2 className="text-3xl font-bold text-white -mb-5">How did we do?</h2>
                <p className="text-neutral-500">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                <div className="flex flex-wrap  sm:gap-5 sm:justify-between items-center text-neutral-400 text-lg font-semibold">
                    {numberArray.map(({ number }, index) => {
                        const isActive = select === index
                        return (
                            <div key={index}>
                                <button
                                    onClick={() => handleSelect(index)}
                                    className={`size-15 rounded-full flex items-center justify-center hover:bg-neutral-500 cursor-pointer ${isActive ? 'bg-[#FC7613] text-white' : 'bg-[#252F39]'}`}>{number}</button>
                            </div>

                        )
                    })

                    }
                </div>
                <button
                    onClick={handleSubmit}
                    className="uppercase py-3 w-full bg-[#FC7613] rounded-full font-semibold text-lg cursor-pointer">Submit</button>
            </div>
        </div>
    )
}