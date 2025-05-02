import { useState } from "react"


function App() {
  const [fullName, setFullname] = useState("")
  const [fullNameErr, setfullNameErr] = useState("")
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [password, setPassword] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [submit, setSubmit] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()

    if (!fullName) {
      setfullNameErr("full name is required");
    } else if (!email) {
      setEmailErr("Email is required")
    } else if (!password) {
      setPasswordErr("Password is required")
    } else {
      setSubmit("Submited!")
      setFullname("")
      setEmail("")
      setPassword("")
    }
    
  }


  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-10">Form Validation</h1>
      <form onSubmit={handleSubmit} action="" className="w-xl bg-gray-600 mx-auto mt-10 p-10 rounded-3xl">
        <div className="relative">
          {
          fullNameErr &&
          <p className="text-red-500 absolute -top-7 left-5">{fullNameErr}</p>
          }
          <input value={fullName} onChange={(e) => { setFullname(e.target.value); setfullNameErr("")}} className="w-full relative p-3 border outline-none rounded-2xl text-white text-center" type="text" placeholder="Enter Your Name"/>
        </div>
        <div className="relative">
          {
          emailErr &&
          <p className="text-red-500 absolute top-3 left-5">{emailErr}</p>
          }
          <input value={email} onChange={(e) => { setEmail(e.target.value); setEmailErr("")}} className="w-full p-3 border outline-none rounded-2xl text-white text-center mt-10" type="email" placeholder="Enter Your Email"/>
        </div>
        <div className="relative">
          {
            passwordErr &&
            <p className="text-red-500 absolute top-3 left-5">{passwordErr}</p>
          }
          <input value={password} onChange={(e)=>{setPassword(e.target.value); setPasswordErr("")}} className="w-full p-3 border outline-none rounded-2xl text-white text-center mt-10" type="password" placeholder="Enter Your Password"/>
        </div>
        {
          submit &&
          <p className="text-2xl text-center mt-5 text-white">{submit}</p>
        }
        <button className="px-10 py-3 bg-black text-white text-2xl font-semibold w-fit flex justify-center mx-auto mt-10 rounded-2xl cursor-pointer hover:bg-gray-900 transition-all duration-300">Submit</button>
      </form>
    </>
  )
}

export default App
