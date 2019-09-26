import React from 'react'
import DatasetView from './dataset-view'
import { useRouter } from 'next/router'

const DatasetContainer = () => {
  const router = useRouter()
  const { uuid } = router.query
  
  return React.createElement(DatasetView, Object.assign({}, {
    uuid: uuid
  }))
}

export default DatasetContainer
