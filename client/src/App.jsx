import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/Register.Page"
import LoginPage from "./pages/Login.Page"
import { AuthProvider } from "./context/AuthContext"
import TaskPage  from "./pages/taskPage"
import TaskFormPage from "./pages/TaskformPage"
import ProfilePage from "./pages/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"

function App() {
    return (
        <>
        <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Home Page</h1>}/>
                <Route path='/login' element={ <LoginPage/> }/>
                <Route path='/register' element={ <RegisterPage/>}/>


            <Route element={<ProtectedRoute/>}>
                <Route path='/tasks' element={ <TaskPage/>}/>
                <Route path='/add-task' element={ <TaskFormPage/>}/>
                <Route path='/tasks/:id' element={< TaskFormPage/>}/>
                <Route path='/profile' element={<ProfilePage />}/>
            </Route>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
        
        </>
    )
}


export default App
