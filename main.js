function App() {
    return (
        <div style={styWholepage}>
        <div style={styBg}>
            <Profile />
            < Name/>
            <Follow/>
        </div>
        </div>
    )
}

const styWholepage = {
    minWidth: '100%',
    height: '100vh',
    display: 'flex',
    background: 'aliceblue',
    padding: '2rem',
    borderRadius: '10px',
    justifyContent: 'center', 
    alignItems: 'center',
}
const styBg = {
    width: '46rem',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    padding: '3rem',
    border: '1px solid rgba(174, 184, 193, 0.345)',
    borderRadius: '25px',
    justifyContent: 'center'
}

function Profile() {
    const styProfile = {
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        overflow:'hidden',
        alignSelf: 'center',
    }
    return (
        <div style={styProfile}>
            <img style={{width: '180px',}} src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="Profile" />
        </div>
    )
}

function Name() {
    const styName = {
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '50%',
    }
    return (
        <div style={styName}>
            <h1 style={{fontSize: '26px'}}>Julienne Moore</h1>
            <p className='sub'>Juilanne.moore@company.com</p>
        </div>
    )
}
function Follow() {
    const styFollow = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: '50%',
    }
    return(
        <div style={styFollow}>
            <div>
                <h1 style={{fontSize: '26px'}}>25</h1>
                <p className='sub'>Posts</p>
            </div>
            <div>
                <h1 style={{fontSize: '26px'}}>350</h1>
                <p className='sub' >Following</p>
            </div>
            <div>
                <h1 style={{fontSize: '26px'}}>1.5K</h1>
                <p className='sub'>Followers</p>
            </div>
        </div>
    )
}





ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)