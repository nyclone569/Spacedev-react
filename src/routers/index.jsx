import AuthRouter from '../components/AuthRouter'
import PrivateRouter from '../components/PrivateRouter'
import { PATH } from '../config/path'
import MainLayout from '../layouts/MainLayout'
import ProfileLayout from '../layouts/ProfileLayout'
import HomePage from '../pages'
import Page404 from '../pages/404'
import CoinPage from '../pages/coin'
import ContactPage from '../pages/contact'
import CoursePage from '../pages/course'
import CourseDetail from '../pages/course/[slug]'
import FAQPage from '../pages/faq'
import PaymentPage from '../pages/payment'
import ProfilePage from '../pages/profile'
import MyCoin from '../pages/profile/coin'
import MyCourse from '../pages/profile/mycourse'
import MyPayment from '../pages/profile/payment'
import MyProject from '../pages/profile/project'
import Project from '../pages/project'
import RegisterPage from '../pages/register'
import ResetPasswordPage from '../pages/reset-password'
import SigninPage from '../pages/signin'
import SignupPage from '../pages/signup'
import TeamPage from '../pages/team'
import { profile } from './profile'

export const routers = (user, login, logout) => {
    return [
        {
            element: <MainLayout user={user} logout={logout} />,
            children: [
                {
                    element: <HomePage />,
                    index: true
                },
                {
                    element: <ContactPage />,
                    path: PATH.contact
                },
                {
                    path: PATH.course,
                    children: [
                        {
                            element: <CoursePage />,
                            index: true
                        },
                        {
                            element: <CourseDetail />,
                            path: PATH.courseDetail
                        }
                    ]
                },
                {
                    element: <TeamPage />,
                    path: PATH.team
                },
                {
                    element: <RegisterPage />,
                    path: PATH.courseRegister
                },
                {
                    element: <Project />,
                    path: PATH.project
                },
                {
                    element: <FAQPage />,
                    path: PATH.faq
                },
                {
                    element: <PaymentPage />,
                    path: PATH.payment
                },
                {
                    element: <CoinPage />,
                    path: PATH.coin
                },
                {
                    element: <AuthRouter user={user} redirect={PATH.profile.index} />,
                    children: [
                        {
                            element: <SigninPage login={login} />,
                            path: PATH.signin
                        },
                        {
                            element: <SignupPage />,
                            path: PATH.signup
                        },
                        {
                            element: <ResetPasswordPage />,
                            path: PATH.resetPassword
                        }
                    ]
                },
                profile(user),
                {
                    element: <Page404 />,
                    path: '*'
                }
            ]
        }
    ]
}