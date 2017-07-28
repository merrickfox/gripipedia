import React from 'react'
import Page from '../components/page'

export default class extends React.Component {

	// static async getInitialProps ({ query }) {
	// 	console.log(query)
	// }

	render () {
		const { page, url, stories } = this.props
		const offset = (page - 1) * 30
		return <Page></Page>
	}

}