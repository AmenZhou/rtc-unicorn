import React, { Fragment } from 'react'
import { buttonIndexList } from '../../utils/button_utils'
import IndexButton from './index_button'

const GroupSelection = ({ mp3List }) => (
  <Fragment className="group-selection">
    {
      buttonIndexList(mp3List).map(indexLetter => (<IndexButton indexLetter={indexLetter} />))
    }
  </Fragment>
)

export default GroupSelection;