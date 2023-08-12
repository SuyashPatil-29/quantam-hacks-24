import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'

type Props = {}

const Approach = (props: Props) => {
  return (
    <div>
        <Card>
            <CardHeader>My Approah towards a project</CardHeader>
            <div className='flex gap-8 justify-between mx-16 mt-20'>
              <div className='flex flex-col gap-10'>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
              </div>

              <div className='flex flex-col gap-10'>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
                <div>
                  <CardTitle className="mb-6">01</CardTitle>
                  <CardDescription className=' mb-6'>Understand the Project</CardDescription>
                  <CardContent>Gather project requirements, objectives, and target audience information to establish project scope and deliverables.</CardContent>
                </div>
              </div>
            </div>
        </Card>
    </div>
  )
}

export default Approach