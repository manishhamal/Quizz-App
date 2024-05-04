import { useState } from "react";
import { qns } from "../data/qns";
const Quizz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizz, setQuizz] = useState([]);
  const [marks, setMarks] = useState(0);
  const [index, setIndex] = useState(0);

  const handleClick = (answer) => {
    if (selectedAnswer === answer) {
      setMarks(marks + 5);
    }

    setSelectedAnswer("");
    index < qns.length && setIndex(index + 1);
  };

  const handleReset = () => {
    setIndex(0);
    setIndex(0);
  };

  console.log(marks);

  console.log(selectedAnswer);
  return (
    <div className="flex justify-center items-center h-screen ">
      <div>
        <div className="title text-center mb-4 text-2xl font-bold">
          This is Quizz App
        </div>
        <div className="quizz border border-black p-10">
          {index <= qns.length - 1 ? (
            <div>
              <div className="mb-8">{qns[index].question} </div>

              <div>
                {qns[index].option.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="radio"
                      name="opt"
                      value={item}
                      checked={selectedAnswer === idx}
                      onChange={() => setSelectedAnswer(idx)}
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex justify-start items-center">
                <button
                  className="mt-4 px-8 py-2 rounded-md bg-blue-700 text-white"
                  onClick={() => handleClick(qns[index].answer)}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>Your Total score is: {marks} </div>
              <div className="mt-4">
                <button
                  className="px-5 py-2 bg-black text-white"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizz;
