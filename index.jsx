// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux-creator'
import { Button } from 'antd'

import PageHeader from 'com/PageHeader'
import PMControl from 'com/PageComponents/PMControl'
import type { ActionModifyT } from 'src/types/actions'
import List from './com/list'
import { accountListRedux } from './redux'

type Props = {
  list: any,
  type: string,
}

class Index extends PureComponent<Props> {
  render () {
    const { type } = this.props
    return (
      <div>
        <PageHeader
          title="账号列表"
          extra={[
            <PMControl key="add" permission="">
              <Button
                key="1"
                size="small"
                icon="plus"
                type="primary"
              >
                新建
              </Button>
            </PMControl>
          ]}
        />

        {type === 'list' &&
        <List
          {...this.props}
        />
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.accountList,
  }),
 {
    actionList: (page, limit, params) => accountListRedux.start(page, limit, params)
  }
)(Index)
