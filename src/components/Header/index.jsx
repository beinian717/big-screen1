import {Decoration8,Decoration5} from '@jiaminghi/data-view-react'
import './index.css'

function Header(){
    return (
        <div className="header">
            <Decoration8 style={{width: '300px', height: '90px'}}/>
            <div className='header-title'>
                <span>可视化大屏项目</span>
                <Decoration5 style={{width: '500px', height: '90px'}}/>
            </div>
            <Decoration8 reverse={true} style={{width: '300px', height: '90px'}}/>

        </div>
    )
}

export default Header
