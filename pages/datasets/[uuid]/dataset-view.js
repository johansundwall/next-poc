import React from 'react'
import DatasetLayout from 'components/datasets/DatasetLayout'

const DatasetView = (props) => {
    return (
    <DatasetLayout>
      <p>{props.uuid}</p>
    </DatasetLayout>
  )
}

export default DatasetView
