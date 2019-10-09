import * as React from 'react'

import { object2labelValue } from 'utils/objectHelper'
import { ACCOUNT_TYPE } from 'conf/enum'

export default () => [
  {
    span: 6,
    gutter: 24,
    type: 'field',
    fields: [
      {
        label: '姓名',
        key: 'aa',
        type: 'input',
        rules: [],
        display: true,
      },
      {
        label: '手机号',
        key: 'bb',
        type: 'input',
        rules: [],
        display: true,
      },
      {
        label: '类型',
        key: 'cc',
        type: 'select',
        items: object2labelValue(ACCOUNT_TYPE),
        rules: [],
        display: true,
      }
    ],
  },
  {
    type: 'button',
    align: 'right',
    fields: [
      {
        label: '重置',
        key: 'reset',
      },
      {
        label: '搜索',
        key: 'submit',
        type: 'primary',
      }
    ],
  },
]
