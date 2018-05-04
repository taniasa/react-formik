import '../common/template/dependencies'
// import React from 'react'

// import Header from '../common/template/header'
// import SideBar from  '../common/template/sidebar'
// import Footer from '../common/template/footer'
// import Routes from './routes'
// // import Messages from '../common/msg/messages'

// export default props => (
//     <div className='wrapper'>
//         <Header/>
//         <SideBar/>
//         <div className='content-wrapper'>
//             {props.children}
//         </div>
//         {/* <Messages/> */}
//         <Footer />
//     </div>
// )
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './routes'
import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'
// import ErrorBoundary from '../common/form/errorBoundary'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            {/* <ErrorBoundary> */}
                <Routes />
            {/* </ErrorBoundary> */}
            <Footer />
            <Messages />
        </div>
    </HashRouter>
)