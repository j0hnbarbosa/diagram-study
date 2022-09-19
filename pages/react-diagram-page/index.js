import React from 'react'
import dynamic from 'next/dynamic'

const ReactDiagramComponent = dynamic(
  () => import('../../components/react-diagram-component'),
  { ssr: false }
)

const ReactDiagramSimpleLinkComponent = dynamic(
  () => import('../../components/react-diagram-component/simple-link'),
  { ssr: false }
)

function ReactDiagramPage() {
  return (
    <ReactDiagramSimpleLinkComponent />
  )
}

export default ReactDiagramPage