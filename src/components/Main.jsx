import React from 'react'
import Hero from './Hero'
import Chat from './Chat'
import Navbar from './Navbar'
import ChatHistory from './ChatHistory'



export default function Main({toggler, setToggler, setChatHistory, chatHistory, prompt, setPrompt, chatGPT, loader, setLoader}) {
  const [input, setInput] = React.useState("")

  return (
    <div className="flex-1 relative h-screen overflow-y-hidden" style={{backgroundColor: toggler ?  "#4d4f5f": "#343541"}}>
      <Navbar toggler={toggler} setToggler={setToggler} />
      {
        chatHistory.length !== 0 ? <ChatHistory chatHistory={chatHistory} setChatHistory={setChatHistory}/>
        : <Hero input={input} setInput={setInput}/>

      }
      <Chat prompt={prompt} setPrompt={setPrompt} setChatHistory={setChatHistory} chatHistory={chatHistory} chatGPT={chatGPT} input={input} setInput={setInput} loader={loader} setLoader={setLoader}/>
    </div>
  )
}
