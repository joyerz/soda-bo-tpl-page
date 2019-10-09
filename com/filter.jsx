// @flow
import * as React from 'react'
import FilterBox from 'com/FilterBox/index'
import Form from 'com/Form/index'
import FilterBase from 'com/PageComponents/FilterBase'
import type { ActionMotifyT } from 'src/types/actions'
import fieldsConf from './filterConf'

type Props = {
  params: {},
  actionList: ActionMotifyT,
}

export default class Filter extends FilterBase<Props, {}> {
  prefix = '_ROUTER_BASE_'

  render() {
    return (
      <FilterBox title="过滤" open>
        <Form
          fieldsConf={fieldsConf()}
          dataSource={this.props.params}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        />
      </FilterBox>
    )
  }
}
