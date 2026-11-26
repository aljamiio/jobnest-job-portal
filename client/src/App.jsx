
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Jobs from './pages/jobs/Jobs'
import JobDetails from './pages/jobs/JobDetails'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

import CandidateDashboard from './pages/dashboard/candidate/CandidateDashboard'
import MyProfile from './pages/dashboard/candidate/MyProfile'
import MyApplications from './pages/dashboard/candidate/MyApplications'
import AppliedJobs from './pages/dashboard/candidate/AppliedJobs'
import SavedJobs from './pages/dashboard/candidate/SavedJobs'
import Notifications from './pages/dashboard/candidate/Notifications'

import MainLayout from './layouts/MainLayout'
import CandidateLayout from './layouts/CandidateLayout'

import NotFound from './pages/NotFound'

function App() {
    return (
        <Routes>

            {/* Main Website Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:id" element={<JobDetails />} />
            </Route>

            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Candidate Dashboard Routes */}
            <Route path="/candidate" element={<CandidateLayout />}>

                <Route
                    path="dashboard"
                    element={<CandidateDashboard />}
                />

                <Route
                    path="profile"
                    element={<MyProfile />}
                />

                <Route
                    path="applications"
                    element={<MyApplications />}
                />

                <Route
                    path="applied-jobs"
                    element={<AppliedJobs />}
                />

                <Route
                    path="saved-jobs"
                    element={<SavedJobs />}
                />

                <Route
                    path="notifications"
                    element={<Notifications />}
                />

            </Route>

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}

export default App
