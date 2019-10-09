// @flow
import React, { PureComponent } from 'react'
import { Divider } from 'antd'

import TableList from 'com/TableList'
import paginationInit from 'utils/paginationHelper'
import { ACCOUNT_TYPE, ACCOUNT_STATUS } from 'conf/enum'
import type { ActionListT } from 'src/types/actions'
import Filter from './filter'
import listConf from './listConf'

type Props = {
  list: Object,
  actionList: ActionListT
}

export default class List extends PureComponent<Props> {

  render() {
    const { list, actionList } = this.props
    return (
      <>
        <Filter
          params={list.params}
          actionList={actionList}
        />

        <div className="box marginT20">
          <TableList
            name="accountList"
            columns={listConf()}
            dataSource={list.data.entries}
            loading={list.loading}
            showSerialNumber={false}
            pagination={paginationInit(list.data.page, list.data.per_page, list.data.total_count, list.params, actionList)}
          />
        </div>
      </>
    )
  }
}
