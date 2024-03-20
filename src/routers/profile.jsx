import React from 'react'
import PrivateRouter from '../components/PrivateRouter'
import { PATH } from '../config/path'
import ProfileLayout from '../layouts/ProfileLayout'
import ProfilePage from '../pages/profile'
import MyCourse from '../pages/profile/mycourse'
import MyProject from '../pages/profile/project'
import MyPayment from '../pages/profile/payment'
import MyCoin from '../pages/profile/coin'

export const profile = (user) => {
    return {
        element: <PrivateRouter user={user} redirect={PATH.signin} />,
        children: [
            {
                element: <ProfileLayout user={user} />,
                path: PATH.profile.index,
                children: [
                    {
                        element: <ProfilePage />,
                        index: true
                    },
                    {
                        element: <MyCourse />,
                        path: PATH.profile.mycourse
                    },
                    {
                        element: <MyProject />,
                        path: PATH.profile.project
                    },
                    {
                        element: <MyPayment />,
                        path: PATH.profile.payment
                    },
                    {
                        element: <MyCoin />,
                        path: PATH.profile.coin
                    }

                ]
            }
        ]
    }
}
