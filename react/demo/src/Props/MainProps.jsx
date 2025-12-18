import React from 'react'
import ClassProps from './ClassProps'
import FuncProps from './FuncProps'

function MainProps() {
    return (
        <div>
            <h1 className=''>hello props</h1>
            <div className="container">
                <h1>Hello this class in Props</h1>
                <div className="row">
                    <ClassProps title="card 1" desc="Hello car 1 data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*rchj5c*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />

                    <ClassProps title="card 2" desc="Hello car 2 data" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />

                    <ClassProps title="card 1" desc="Hello car 1 data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*rchj5c*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />

                    <ClassProps title="card 2" desc="Hello car 2 data" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />
                    <ClassProps title="card 1" desc="Hello car 1 data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*rchj5c*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />

                    <ClassProps title="card 2" desc="Hello car 2 data" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />
                </div>
            </div>

            <div className="container">
                <h1>Hello this Function Props</h1>
                <div className="row">
                    <FuncProps title="car 1" desc="Hello car 1imge" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />
                    <FuncProps title="car 2" desc="Hello car 1imge" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />
                    <FuncProps title="car 3" desc="Hello car 1imge" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />
                    <FuncProps title="car 4" desc="Hello car 1imge" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />
                    <FuncProps title="car 5" desc="Hello car 1imge" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*523nof*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjYwMzE5NjkkbzQ1JGcxJHQxNzY2MDMxOTc3JGo1MiRsMCRoMA.." />
                </div>
            </div>
        </div>
    )
}

export default MainProps
