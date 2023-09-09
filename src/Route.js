import { useEffect, useState } from 'react'

const tabs = ['Introduction', 'Frontend', 'Backend', 'Fullstack']

function Route() {
    const [type, setType] = useState('Introduction')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/${type}`)
            .then((res) => res.json())
            .then((item) => setItems(item))
    }, [type])

    return (
        <div className='App-container'>
            <div className='App-tab-list'>
                {
                    tabs.map((tab) =>
                        <div className='App-tab-item' 
                            key={tab} 
                            onClick={() => setType(tab)}
                            style={
                                type === tab ? { color: '#61dafb'} : {}
                            }
                        >
                            {tab}
                        </div>
                    )
                }
            </div>

            <ul className='App-route-list'>
                {items.map((item, index) => <li key={index}>{item.routeItem}</li>)}
            </ul>
        </div>
    )
}

export default Route
