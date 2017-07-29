import React from 'react'
import Page from '../components/page'
import StartingOptions from '../components/starting-options'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'


class Index extends React.Component {
	render () {
		return(
			<Page>
				<StartingOptions/>
			</Page>
		)
	}

}

export default withRedux(initStore, null, null)(Index)