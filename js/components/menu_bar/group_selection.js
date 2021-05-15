import React, { Fragment } from 'react'
import { buttonIndexList } from '../../utils/button_utils'
import IndexButton from './index_button'

const GroupSelection = ({ mp3List, setGroup }) => (
  <Fragment>
    <IndexButton indexLetter="ALL" setGroup={setGroup} />
    {
      buttonIndexList(mp3List).map(indexLetter => (<IndexButton indexLetter={indexLetter} setGroup={setGroup} />))
    }
  </Fragment>
)

export default GroupSelection;