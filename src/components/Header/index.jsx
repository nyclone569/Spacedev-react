import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PATH } from '../../config/path'

export default function Header({ user, logout }) {

    const { pathname } = useLocation()
    useEffect(() => {
        onCloseMenu()
    }, [pathname])

    const onToggleMenu = () => {
        document.body.classList.toggle('menu-is-show')
    }

    const onCloseMenu = () => {
        document.body.classList.remove('menu-is-show')
    }
    const _logout = (ev) => {
        ev.preventDefault()
        logout()
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={onToggleMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="./" className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>Spacedev</h1>
                    </Link>
                    <div className="right">
                        {
                            user ? (<div className="have-login">
                                <div className="account">
                                    <Link to={PATH.profile.index} className="info">
                                        <div className="name">Đặng Thuyền Vương</div>
                                        <div className="avatar">
                                            <img src="/img/avt.png" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="hamberger"></div>
                                <div className="sub">
                                    <Link to={PATH.profile.mycourse}>Khóa học của tôi</Link>
                                    <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                                    <a onClick={_logout} href="#">Đăng xuất</a>
                                </div>
                            </div>)
                                : (
                                    <div className="not-login bg-none">
                                        <Link to={PATH.signin} className="btn-register">Đăng nhập</Link>
                                        <Link to={PATH.signup} className="btn main btn-open-login">Đăng ký</Link>
                                    </div>
                                )
                        }


                    </div>
                </div>
                <div className="progress" />
            </header>
            <nav className="nav">
                <ul>
                    {/* <li>
                        <a href="./signin.html">Đăng ký / Đăng nhập</a>
                    </li> */}
                    <li>
                        <NavLink to={PATH.profile.index} className="account">
                            <div className="avatar">
                                <img src="/img/avt.png" alt="" />
                            </div>
                            <div className="name">Đặng Thuyền Vương</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.home}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.team}>Spacedev Team</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.course}>Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.project}>Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.contact}>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={onCloseMenu} />
        </>
    )
}
