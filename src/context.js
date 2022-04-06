import React, {useState,useContext,useEffect} from 'react'
import { useCallback } from 'react'

const url ='https://opentdb.com/api.php?amount=5';
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading,setLoading] = useState(false);
    const [quiz,setQuiz] = useState(false);
    const [questions,setQuestions] = useState([]);

    const fetchJson = useCallback(async () => {
        if(!quiz){
            setLoading(true);
            try{
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.results);
                if(data.results){
                    const newData = data.results.map((item) =>{
                        const {
                            question,
                            correct_answer,
                            incorrect_answers
                        } = item

                        return {
                            question: question,
                            correct_answer: correct_answer,
                            incorrect_answer: incorrect_answers,
                        }
                    })
                    setQuestions(newData);
                }else{
                    setQuestions([]);
                }
                setLoading(false);
            }catch(error){
                console.log(error);
                setLoading(false);
            }
        }
    },[quiz])


    useEffect(() => {
        fetchJson();
    }, [quiz,fetchJson])


    return (
        <AppContext.Provider
            value={{
                loading,
                quiz,
                questions,
                setQuiz,
            }}
          >
            {children}
        </AppContext.Provider>
    )  
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }