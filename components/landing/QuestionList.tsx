'use client'
import {questions} from "@/utils/data";
import {MdAdd, MdOutlineClose} from "react-icons/md";
import {useState} from "react";

const QuestionList = () => {

    const [showDropDown, setShowDropDown] = useState("")

    return (
        <div>
            <div className="w-[80%] mx-auto py-20">
                <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

                {questions.map(question => (
                    <div className="mb-2 text-xl lg:text-2xl" key={question.question}>
                        <div
                            className="flex justify-between items-center mb-[2px] bg-neutral-800 p-6 cursor-pointer hover:bg-neutral-700"
                            onClick={() => setShowDropDown(a => a === question.question ? "" : question.question)}
                        >
                            {question.question}
                            {showDropDown === question.question ?
                                <MdOutlineClose className="text-[32px] lg:text-[38px]"/> :
                                <MdAdd className="text-[34px] lg:text-[38px]"/>}
                        </div>

                        <div className={`bg-neutral-800 overflow-hidden transition-all duration-[400ms] 
                            ${showDropDown === question.question ? "max-h-[600px]" : "max-h-0"}`}>
                            <p className="p-6 duration-300" dangerouslySetInnerHTML={{__html: question.answer}}></p>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}

export default QuestionList;