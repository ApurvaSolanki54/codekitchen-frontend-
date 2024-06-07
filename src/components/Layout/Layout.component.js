import React, { useEffect, useState } from "react";
import Edit from "./Edit.component";
import Description from "./Description.component";
import axios from "axios";
import { Option, Select } from "@material-tailwind/react";
import LoadingLayout from "../Loading/LoadingLayout.componenent";
import UserSubmittedCode from "./UserSubmittedCode.component";
import DisplayAll from "./DisplayAll.componenet";
import Loading from "../Loading/Loading.component";
import { useParams } from "react-router-dom";

const arr = [
  {
    id: 45,
    name: "Assembly (NASM 2.14.02)",
  },
  {
    id: 46,
    name: "Bash (5.0.0)",
  },
  {
    id: 47,
    name: "Basic (FBC 1.07.1)",
  },
  {
    id: 75,
    name: "C (Clang 7.0.1)",
  },
  {
    id: 76,
    name: "C++ (Clang 7.0.1)",
  },
  {
    id: 48,
    name: "C (GCC 7.4.0)",
  },
  {
    id: 52,
    name: "C++ (GCC 7.4.0)",
  },
  {
    id: 49,
    name: "C (GCC 8.3.0)",
  },
  {
    id: 53,
    name: "C++ (GCC 8.3.0)",
  },
  {
    id: 50,
    name: "C (GCC 9.2.0)",
  },
  {
    id: 54,
    name: "C++ (GCC 9.2.0)",
  },
  {
    id: 86,
    name: "Clojure (1.10.1)",
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
  },
  {
    id: 77,
    name: "COBOL (GnuCOBOL 2.2)",
  },
  {
    id: 55,
    name: "Common Lisp (SBCL 2.0.0)",
  },
  {
    id: 90,
    name: "Dart (2.19.2)",
  },
  {
    id: 56,
    name: "D (DMD 2.089.1)",
  },
  {
    id: 57,
    name: "Elixir (1.9.4)",
  },
  {
    id: 58,
    name: "Erlang (OTP 22.2)",
  },
  {
    id: 44,
    name: "Executable",
  },
  {
    id: 87,
    name: "F# (.NET Core SDK 3.1.202)",
  },
  {
    id: 59,
    name: "Fortran (GFortran 9.2.0)",
  },
  {
    id: 60,
    name: "Go (1.13.5)",
  },
  {
    id: 95,
    name: "Go (1.18.5)",
  },
  {
    id: 88,
    name: "Groovy (3.0.3)",
  },
  {
    id: 61,
    name: "Haskell (GHC 8.8.1)",
  },
  {
    id: 91,
    name: "Java (JDK 17.0.6)",
  },
  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
  },
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
  },
  {
    id: 93,
    name: "JavaScript (Node.js 18.15.0)",
  },
  {
    id: 78,
    name: "Kotlin (1.3.70)",
  },
  {
    id: 64,
    name: "Lua (5.3.5)",
  },
  {
    id: 89,
    name: "Multi-file program",
  },
  {
    id: 79,
    name: "Objective-C (Clang 7.0.1)",
  },
  {
    id: 65,
    name: "OCaml (4.09.0)",
  },
  {
    id: 66,
    name: "Octave (5.1.0)",
  },
  {
    id: 67,
    name: "Pascal (FPC 3.0.4)",
  },
  {
    id: 85,
    name: "Perl (5.28.1)",
  },
  {
    id: 68,
    name: "PHP (7.4.1)",
  },
  {
    id: 43,
    name: "Plain Text",
  },
  {
    id: 69,
    name: "Prolog (GNU Prolog 1.4.5)",
  },
  {
    id: 70,
    name: "Python (2.7.17)",
  },
  {
    id: 92,
    name: "Python (3.11.2)",
  },
  {
    id: 71,
    name: "Python (3.8.1)",
  },
  {
    id: 80,
    name: "R (4.0.0)",
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
  },
  {
    id: 73,
    name: "Rust (1.40.0)",
  },
  {
    id: 81,
    name: "Scala (2.13.2)",
  },
  {
    id: 82,
    name: "SQL (SQLite 3.27.2)",
  },
  {
    id: 83,
    name: "Swift (5.2.3)",
  },
  {
    id: 74,
    name: "TypeScript (3.7.4)",
  },
  {
    id: 94,
    name: "TypeScript (5.0.3)",
  },
  {
    id: 84,
    name: "Visual Basic.Net (vbnc 0.0.0.5943)",
  },
];

const Layout = () => {
  const { questionId } = useParams();
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [languageId, setLanguageId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState("");
  const [clickedButton, setClickedButton] = useState(false);  
  const [code, setCode] = useState("");
  const [activeTab, setActiveTab] = useState("input");
  const [runStatusDone, setRunStatusDone] = useState("Success");
  const [input, setInput] = useState("");
  const [stdout, setStdout] = useState("");
  const [compile_output, setCompile_output] = useState("");
  const [message, setMessage] = useState("");
  const [runDescription, setRunDescription] = useState("");
  const [runArr, setRunArr] = useState({});
  const [finalOutput, setFinalOutput] = useState([]);
  const getRunResult = async (token) => {
    const response2 = await axios.post(
      "http://localhost:8000/api/v1/run/runCode",
      { token }
    );

    console.log(response2.data.data.status);

    if (response2.data.data.status === "Pending") {
      setTimeout(() => {
        getRunResult(token);
      }, 3000);
    }
    if (response2.data.data.status === "Success") {
      let arr = [];
      console.log("success done:", response2.data);
      setRunStatusDone("Success");
      setActiveTab("output");
      setStdout(response2.data.data.stdout);
      setCompile_output(response2.data.data.compile_output);
      setMessage(response2.data.data.message);
      setRunDescription(response2.data.data.description);
    }
  };

  const runCode = async () => {
    if (input !== "" && code !== "") {
      setRunStatusDone("Pending");
      const data = {
        code: code,
        input: input,
        languageId,
      };
      const response = await axios.post(
        "http://localhost:8000/api/v1/submit/submitCode",
        data
      );
      const token = response.data.data.token;
      console.log(token);

      getRunResult(token);
    }
    if (input === "") {
      console.log("inside if");
    }

    if (code === "") {
      console.log("no code");
    }
  };

  const getFinalResult = async (id) => {
    const data = {
      allCheckRequestId: id,
    };
    const response2 = await axios.post(
      "http://localhost:8000/api/v1/display/display-submission",
      data,
      { withCredentials: true }
    );
    console.log(response2.data);

    let flag = false;
    for (let i = 0; i < response2.data.data.length; i++) {
      if (response2.data.data[i].status === "Pending") {
        flag = true;
      }
    }

    if (flag) {
      setTimeout(() => {
        getFinalResult(id);
      }, 3000);
    } else {
      setRunStatusDone("Success");
      console.log("hogaya sab");
      console.log(response2.data);
      setFinalOutput(response2.data.data);
      
      setActiveTab("submission");
    }
  };

  const finalSubmit = async () => {
    if (code === "") {
      console.log("no code");
    }
    setRunStatusDone("Pending");
    const data = {
      questionId: questionId,
      languageId,
      language,
      code: code,
    };
    const response = await axios.post(
      "http://localhost:8000/api/v1/final-submission/submit-code",
      data,
      { withCredentials: true }
    );
    console.log("sending code: ", response.data);
    console.log("id: ", response.data.data._id);

    getFinalResult(response.data.data._id);
  };

  useEffect(() => {
    setInput(isButtonClicked);
    runCode();
    setIsButtonClicked("");
    setClickedButton(false);
  }, [clickedButton]);

  useEffect(() => {
    async function getAllLanguages() {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/v1/languages/getlanguage"
      );
      console.log("lang: ", response.data);
      setLanguages(response.data.data);

      setLoading(false);
    }

    getAllLanguages();
  }, []);

  function handleChange(e) {
    const selectedLanguage = e.target.value;
    const foundLanguage = languages.find(
      (lang) => lang.name === selectedLanguage
    );
    if (foundLanguage) {
      setLanguage(selectedLanguage);
      setLanguageId(foundLanguage.id);
    }
    console.log(e.target.value);
  }

  return (
    <div>
      {loading ? (
        <LoadingLayout />
      ) : (
        <div className="h-full">
          <div className="h-24 bg-gray-400">
            <div class="flex justify-center items-center">
              <div className="flex flex-col items-center mt-3">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={language}
                  onChange={handleChange}
                >
                  {languages.map((language, index) => (
                    <option value={language.name} key={language.id}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-16 ml-3 h-full">
            <div className="bg-white rounded-xl h-full mb-10">
              <p className="flex ml-3 mt-2 text-lg font-medium"></p>
              {/* <Description/> */}
              <UserSubmittedCode
                questionId={questionId}
                
                buttonClicked={setIsButtonClicked}
                setClickedButton={setClickedButton}
              />
            </div>
            <div className="bg-white rounded-xl ">
              <Edit
                languageId={languageId}
                language={language}
                isButtonClicked={isButtonClicked}
                clickedButton={clickedButton}
                setIsButtonClicked={setIsButtonClicked}
                setClickedButton={setClickedButton}
                //
                setCode={setCode}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                setRunStatusDone={setRunStatusDone}
                //run
                setInput={setInput}
                input={input}
                setStdout={setStdout}
                setCompile_output={setCompile_output}
                setMessage={setMessage}
                setRunDescription={setRunDescription}
                // setRunArr={setRunArr}
                //final submission
                setFinalOutput={setFinalOutput}
              />
              <div className="">
                
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 place-content-end">
            <div></div>
            {runStatusDone === "Success" ? (
                  <DisplayAll
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                  setInput={setInput}
                  stdout={stdout}
                  compile_output={compile_output}
                  message={message}
                  runDescription={runDescription}
                  finalOutput={finalOutput}
                  setRunArr={setRunArr}
                  runArr={runArr}
                />
                ) : (
                  <div className="mt-5">
                    <Loading />
                  </div>
                )}
            
          </div>
          <div className="flex justify-center">
            <button
              className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-3 mr-3"
              type="button"
              onClick={runCode}
            >
              Run Code
            </button>

            <button
              className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-3 ml-3"
              type="button"
              onClick={finalSubmit}
            >
              Final Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
