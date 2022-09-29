import React from 'react'
import dynamic from 'next/dynamic'

const ReactDiagramComponent = dynamic(
  () => import('../../components/react-diagram-component'),
  { ssr: false }
)


function ReactDiagramPage(props) {
  console.log("ReactDiagramPage", props)
  return (
    <ReactDiagramComponent />
  )
}

export default ReactDiagramPage