import React, { useEffect, useState } from 'react'
import ListCourse from '../../components/ListCourse'
import { courseService } from '../../services/course'
import { CourseCardLoading } from '../../components/CourseCard'
import { useFetch } from '../../hooks/useFetch'

export default function CoursePage() {
    const { data: courses, loading } = useFetch(() => courseService.getCourse())
    // const [loading, setLoading] = useState(true)
    // const [courses, setCourse] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setLoading(true)
    //             let res = await courseService.getCourse()
    //             res = await res.json()
    //             setCourse(res.data)
    //             setLoading(false)
    //         } finally {
    //             setLoading(false)
    //         }
    //     })
    // }, [])
    return (
        <section className="section-1">
            <div className="container">
                <h2 className="main-title">KHÓA HỌC SPACEDEV</h2>
                <p className="top-des">
                    Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp, phát triển hoạt động
                    kinh doanh hay chỉ đơn giản là muốn khám phá thế giới, hãy chọn lộ
                    trình học tập mà bạn muốn và bắt đầu câu chuyện thành công của bạn.
                </p>
                <div className="textbox" style={{ marginTop: 100 }}>
                    <h3 className="sub-title">KHÓA HỌC</h3>
                    <h2 className="main-title">OFFLINE</h2>
                </div>
                <div className="list row">
                    {
                        loading ? Array.from(Array(6)).map((_, i) => <CourseCardLoading key={i} />) : <ListCourse data={courses.data} />
                    }
                </div>
            </div>
        </section>
    )
}
