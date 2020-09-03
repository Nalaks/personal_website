declare module 'remark-html' {
	const html: any
	export default html
}

declare interface allPostsDataProps {
	allPostsData: {
		date: string
		title: string
		id: string
	}[]
}

declare interface postDataProps {
	postData: {
		title: string
		date: string
		contentHtml: string
	}
}

declare type grayMatterData = { date: string; title: string }

declare interface LayoutBlogProps {
	children: React.ReactNode
	blog?: boolean
}

declare interface LayoutProps {
	children: React.ReactNode
	home?: boolean
	about?: boolean
	projects?: boolean
	contact?: boolean
}
