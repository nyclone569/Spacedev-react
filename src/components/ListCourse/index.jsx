import React, { useState } from 'react'
import { courseService } from '../../services/course'
import { CourseCard } from '../CourseCard'

export default function ListCourse({ data }) {

    return (
        data.map(e => <CourseCard key={e.id} {...e} />)
    )

}
