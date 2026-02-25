import { useState } from "react"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)

        setEmail('')
        setPassword('')
        
    } 


    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 ">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-purple-500/30">
                  <h2 className="text-3xl font-semibold text-white text-center mb-8">
          Welcome Back
        </h2>
                <form 
                onSubmit={(e) => {
                 submitHandler(e)
                }}
                className="flex flex-col items-center justify-center">
                    <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                     required className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition" type="email" placeholder="Enter your email" /> 
                    <input 
                    value={password}
                    onChange={(e) => {
                         setPassword(e.target.value)
                    }}
                    required className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition m-4" type="password" placeholder="Enter your password"/>
                    <button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 
                       text-white font-medium transition duration-300">Login</button>
                </form>

            </div>


        </div>
)
}

export default Login;
