import ContactPage from './pages/contact'
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterPage from './pages/register'
import { Route, Routes, useRoutes } from 'react-router-dom'
import CoursePage from './pages/course'
import HomePage from './pages'
import TeamPage from './pages/team'
import ProjectPage from './pages/project'
import FAQPage from './pages/faq'
import PaymentPage from './pages/payment'
import CoinPage from './pages/coin'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import ResetPasswordPage from './pages/reset-password'
import Page404 from './pages/404'
import ProfilePage from './pages/profile'
import MyCourse from './pages/profile/mycourse'
import ProfileLayout from './layouts/ProfileLayout'
import MyCoin from './pages/profile/coin'
import MyPayment from './pages/profile/payment'
import MyProject from './pages/profile/project'
import MainLayout from './layouts/MainLayout'
import { PATH } from './config/path'
import CourseDetail from './pages/course/[slug]'
import { useEffect, useState } from 'react'
import PrivateRouter from './components/PrivateRouter'
import AuthRouter from './components/AuthRouter'
import { routers } from './routers'

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'))
    } catch (err) {
      return null
    }
  })
  const login = () => {
    setUser({
      name: 'Đặng Thuyền Vương',
      avatar: '/img/avt.png'
    })
  }
  const logout = () => {
    setUser()
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const element = useRoutes(routers(user, login, logout))

  return (
    <>
      {element}
      {/* <Routes>
        <Route element={<MainLayout user={user} logout={logout} />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.contact} element={<ContactPage />} />

          <Route path={PATH.course}>
            <Route index element={<CoursePage />} />
            <Route path={PATH.courseDetail} element={<CourseDetail />} />
          </Route >

          <Route path={PATH.team} element={<TeamPage />} />
          <Route path={PATH.courseRegister} element={<RegisterPage />} />
          <Route path={PATH.project} element={<ProjectPage />} />
          <Route path={PATH.faq} element={<FAQPage />} />
          <Route path={PATH.payment} element={<PaymentPage />} />
          <Route path={PATH.coin} element={<CoinPage />} />

          <Route element={<AuthRouter redirect={PATH.profile.index} user={user} />}>
            <Route path={PATH.signin} element={<SigninPage login={login} />} />
            <Route path={PATH.signup} element={<SignupPage />} />
            <Route path={PATH.resetPassword} element={<ResetPasswordPage />} />
          </Route>

          <Route element={<PrivateRouter user={user} redirect={PATH.signin} />}>
            <Route path={PATH.profile.index} element={<ProfileLayout user={user} />}>
              <Route index element={<ProfilePage />}></Route>
              <Route path={PATH.profile.mycourse} element={<MyCourse />}></Route>
              <Route path={PATH.profile.coin} element={<MyCoin />}></Route>
              <Route path={PATH.profile.payment} element={<MyPayment />}></Route>
              <Route path={PATH.profile.project} element={<MyProject />}></Route>
            </Route>
          </Route>



          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes> */}
      {/* <ContactPage /> */}
      {/* <RegisterPage /> */}
    </>
  )
}

export default App
