// @flow
import { buildRedux  } from 'react-redux-creator'
import {API} from 'conf'
import {paramsDateRange2string} from 'utils/objectHelper'

export default {}

export const accountListRedux = buildRedux('accountList')({
  url: function* (payload, { put, call, getAction, getState }) {
  },
  method: 'GET',
  onResult: function* (data, payload, { put, call, getAction, getState }) {
  },
  onAfter: function* (data, payload, { put, call, getAction, getState }) {
  },
  onError: function* (data, payload, { put, call, getAction, getState }) {
  },
})
