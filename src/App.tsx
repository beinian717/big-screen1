
import { useEffect, useState } from 'react'
import './App.css'
// @ts-ignore
import Header from './components/Header/index.jsx'
import Box1 from './components/Box1/index.jsx'
import Box2 from './components/Box2/index.jsx'
import Box3 from './components/Box3/index.jsx'
import Box4 from './components/Box4/index.jsx'
import Box5 from './components/Box5/index.jsx'
import { scale } from './utils/index.tsx'

function App() {

  const [state, setState] = useState({ scale: 1 })
  useEffect(() => {
    setState({ scale: scale() })
    window.addEventListener('resize', () => {
      setState({ scale: scale() })
    })
    // 组件销毁时调用
    // 依赖发生变化时先调用该函数
    return () => {
      window.removeEventListener('resize', () => {
        setState({ scale: scale() })
      })
    }
  }, [])


  return (
    <>
      <div className="app" style={{ transform: `scale(${state.scale})  translate(-50%, -50%)` }}>
        <Header />
        <div className="line1">
          <Box1 />
          <Box2 />
          <Box3 />
        </div>
        <div className="line2">
          <Box4 />
          <Box5 />
        </div>

      </div>
    </>
  )
}

export default App
