import { useState, useCallback, useEffect, useRef} from "react"

function App() {
  const [len, setLen] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!#$%^`~&*_-";

    for (let i = 1; i < len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [len, numAllow, charAllow, setPassword]);

  const copyPassword =()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator();
  },[len, numAllow, charAllow, setPassword])

  return (
    <>
      <div className="w-full h-screen bg-black">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
          <div className="flex shadow rounded-lg overflow-hidden md-4">
            <input type="text"
              value={password}
              className="outline-none rounded-lg w-full py-2 px-3"
              placeholder="password"
              readOnly ref={passwordRef}/>

            <button
              className="p-1.5 m-1 bg-sky-400 text-white font-bold rounded-xl outline-none shrink-0 hover:bg-sky-700" onClick={copyPassword}>Copy</button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range" 
              min={6} max={16} value={len}
              className="cursor-pointer"
              onChange={(e)=>{
                setLen(e.target.value)
              }} />
              <label htmlFor="">Length: {len}</label>
            </div>

            <div className="flex text-sm gap-x-2">
              <input type="checkbox" defaultChecked={numAllow}
              id="numInput"
              onChange={()=>{
                setNumAllow((prev)=>!prev);
              }} />
              <label htmlFor="numInput">Numbers</label>
            </div>

            <div className="flex text-sm gap-x-2">
              <input type="checkbox" defaultChecked={charAllow}
              id="charInput"
              onChange={()=>{
                setCharAllow((prev)=>!prev);
              }} />
              <label htmlFor="charInput">Characters</label>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
