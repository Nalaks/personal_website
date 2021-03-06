import { parseISO, format } from 'date-fns'

const Date = ({ dateString }: { dateString: string }) => {
	const date = parseISO(dateString)
	return <time dateTime={dateString}>{format(date, 'd.L.yyyy')}</time>
}

export default Date
