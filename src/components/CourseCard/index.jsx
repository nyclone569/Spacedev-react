import React from 'react'
import { Link, generatePath } from 'react-router-dom'
import { PATH } from '../../config/path'
import { useScrollTop } from '../../hooks/useScrollTop'
import Skeleton from '../skeleton'

export function CourseCard({ money, thumbnailUrl, long_description, short_description, title, slug, id }) {
    const path = generatePath(PATH.courseDetail, { id })
    const registerPath = generatePath(PATH.courseRegister, { id })
    useScrollTop()
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={thumbnailUrl} alt="" />
                </Link>
                <div className="info">
                    <Link className="name" to={path}>
                        {title}
                    </Link>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Vương Đặng</div>
                    </div>
                    <Link to={registerPath} className="register-btn">
                        {money} đ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const CourseCardLoading = () => {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to='#'>
                    {/* <img src={thumbnailUrl} alt="" /> */}
                    <Skeleton height={350} />
                </Link>
                <div className="info">
                    <Link className="name" to='#'>
                        {/* {title} */}
                        <Skeleton height={30} />
                    </Link>
                    <p className="des"><Skeleton height={80} /></p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <Skeleton height={36} width={36} shape='circle' />
                            {/* <img src="/img/avt.png" alt="" /> */}
                        </div>
                        <div className="name"><Skeleton height={24} width={150} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}