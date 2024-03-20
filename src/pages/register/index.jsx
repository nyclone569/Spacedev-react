import React, { useState } from 'react'
import { regexp, required, validate } from '../../utils/validate'
import Field from '../../components/Field'
import { useForm } from '../../hooks/useForm'
import { useParams } from 'react-router-dom'
import { courseService } from '../../services/course'
import { useScrollTop } from '../../hooks/useScrollTop'
import { currency } from '../../utils/currency'
import { useFetch } from '../../hooks/useFetch'

export default function RegisterPage() {
    const { id } = useParams()

    const { data, loading } = useFetch(() => courseService.getCourseDetail(id))
    // const [detail, setDetail] = useState(() => {
    //     return courseService.getCourseDetail(parseInt(id))
    // })
    // useScrollTop()
    const { register, validate, values } = useForm({
        name: [
            required('Xin vui lòng nhập họ và tên')
            // { required: true, message: 'Xin vui lòng nhập họ và tên' }
        ],
        email: [
            required(),
            // { required: true },
            regexp('email', 'Xin vui lòng điền đúng định dạng email')
            // { regexp: 'email' }
        ],
        phone: [
            required(),
            regexp('phone')
        ],
        fb: [
            required(),
            regexp(/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/, 'Xin vui lòng nhập đúng link facebook của bạn')
        ]
    })
    const [isSuccess, setIsSuccess] = useState(false)
    const onSubmit = () => {


        if (validate()) {
            setIsSuccess(true)
        } else {
            console.log('validate error')
        }
    }
    if (loading) return null
    let { data: detail } = data

    if (!detail) return <div style={{ margin: '100px 0' }} >...Not found...</div>

    return (
        <>
            <main id="main">
                {
                    isSuccess ? (
                        <div className="register-success" style={{ margin: '40px auto', padding: '200px 500px ', textAlign: 'center' }}>
                            <div className="contain" style={{ backgroundColor: 'white' }}>
                                <div className="main-title">{detail.title}</div>
                                <p>
                                    <strong>
                                        Chào mừng {values.name} đã trở thành thành viên mới của Spacedev Team.
                                    </strong>{" "}
                                    <br />
                                    Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ
                                    chủ động liên lạc với bạn thông qua facebook hoặc số điện thoại của bạn.
                                </p>
                            </div>
                            <a href="/" className="btn main rect">về trang chủ</a>
                        </div>
                    ) : (
                        <section className="register-course">
                            <div className="container">
                                <div className="wrap container">
                                    <div className="main-sub-title">ĐĂNG KÝ</div>
                                    <h1 className="main-title">{detail.title}</h1>
                                    <div className="main-info">
                                        <div className="date">
                                            <strong>Khai giảng:</strong> 15/11/2020
                                        </div>
                                        <div className="time">
                                            <strong>Thời lượng:</strong> 18 buổi
                                        </div>
                                        <div className="time">
                                            <strong>Học phí:</strong> {currency(detail.money)} VND
                                        </div>
                                    </div>
                                    <div className="form">
                                        <Field
                                            label="Họ và tên"
                                            placeholder="Họ và tên"
                                            required
                                            {...register('name')}
                                        />
                                        <Field
                                            label="Số điện thoại"
                                            placeholder="Số điện thoại"
                                            required
                                            {...register('phone')}
                                        />
                                        <Field
                                            label="Email"
                                            placeholder="Email của bạn"
                                            required
                                            {...register('email')}
                                        />
                                        <Field
                                            label="URL Facebook"
                                            placeholder="https://facebook.com"
                                            required
                                            {...register('fb')}
                                        />
                                        <Field
                                            label="Sử dụng COIN"
                                            {...register('coin')}
                                            renderInput={(props) => (
                                                <div className="checkcontainer">
                                                    Hiện có <strong>300 COIN</strong>
                                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                                    <input type="checkbox" {...props} />
                                                    <span className="checkmark" />
                                                </div>
                                            )}
                                        />
                                        <Field
                                            label="Hình thức thanh toán"
                                            {...register('payment')}
                                            renderInput={(props) => (
                                                <div className="select">
                                                    <div className="head">Chuyển khoản</div>
                                                    <div className="sub">
                                                        <a href="#">Chuyển khoản</a>
                                                        <a href="#">Thanh toán tiền mặt</a>
                                                    </div>
                                                </div>
                                            )}
                                        />
                                        <Field
                                            label="Ý kiến cá nhân"
                                            placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                                            {...register('note')}
                                        />
                                        <button onClick={onSubmit} className="btn main rect">đăng ký</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }


            </main >

        </>
    )
}
