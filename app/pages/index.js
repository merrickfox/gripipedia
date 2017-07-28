import React from 'react'
import Page from '../components/page'

export default class extends React.Component {

	static async getInitialProps ({ query }) {
		console.log(query)
		return {}
	}

	render () {
		return <Page></Page>
	}

}