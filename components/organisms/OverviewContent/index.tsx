import React from 'react'
import Category from './Category'
import TableRow from './TableRow'

export default function OverviewContent() {
	return (
		<main className="main-wrapper">
			<div className="ps-lg-0">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
				<div className="top-up-categories mb-30">
					<p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
					<div className="main-content">
						<div className="row">
							<Category icon='desktop' nominal={18000500}>
								Game<br />
								Desktop
							</Category>
							<Category icon='mobile' nominal={18000500}>
								Game<br />
								Mobile
							</Category>
							<Category icon='desktop' nominal={18000500}>
								Others<br />
								Category
							</Category>

						</div>
					</div>
				</div>
				<div className="latest-transaction">
					<p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
					<div className="main-content main-content-table overflow-auto">
						<table className="table table-borderless">
							<thead>
								<tr className="color-palette-1">
									<th className="text-start" scope="col">Game</th>
									<th scope="col">Item</th>
									<th scope="col">Price</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								<TableRow thumbnail='overview-1' title='Mobile Legends: The New Battle 2021' category='Desktop' item={200} price={290000} status="pending" />
								<TableRow thumbnail='overview-2' title='Call of Duty:Modern' category='Desktop' item={200} price={290000} status="failed" />
								<TableRow thumbnail='overview-3' title='Clash of Clans' category='Desktop' item={200} price={290000} status="success" />
								<TableRow thumbnail='overview-4' title='The Royal Game' category='Desktop' item={200} price={290000} status="pending" />

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	)
}