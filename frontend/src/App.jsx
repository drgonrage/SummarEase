
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ResultsPage from './components/ResultsPage';
import ProtectedRoute from './components/ProtectedRoute';
import History from './components/History';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/results"
                    element={
                        <ProtectedRoute>
                            <ResultsPage />
                        </ProtectedRoute>
                    }
                />
                <Route 
                    path='/history' 
                    element= { 
                    <ProtectedRoute> 
                        <History/> 
                    </ProtectedRoute> }>
                </Route>
            </Routes>
        </Router>
    );
}
// import React from "react"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Home from "./pages/Home"
// import NotFound from "./pages/NotFound"
// import ProtectedRoute from "./components/ProtectedRoute"
// import AudioUploadForm from "./components/AudioUploadForm"
// import LandingPage from "./pages/Home"

// function Logout() {
//   localStorage.clear()
//   return <Navigate to="/login"/>
// }

// function RegisterAndLogout() {
//   localStorage.clear()
//   return <Register />
// }


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />}/>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/logout" element={<ProtectedRoute> <Logout /> </ProtectedRoute>} />
//         <Route path="/upload" element={<ProtectedRoute> <AudioUploadForm /> </ProtectedRoute>} />
//         <Route path="*" element={<NotFound />} />
        
//       </Routes>  
//     </BrowserRouter>
//   )
// }

// export default App
