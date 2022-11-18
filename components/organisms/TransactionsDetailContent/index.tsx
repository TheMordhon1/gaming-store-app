import ItemInfo from "./ItemInfo";
import RowInfo from "./RowInfo";

export default function TransactionsDetailContent() {
	return (
		<main className="main-wrapper">
			<div className="ps-lg-0">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
				<div className="details">
					<div className="main-content main-content-card overflow-auto">
						<section className="checkout mx-auto">
							<ItemInfo image="Thumbnail-3" category="Mobile" status="Pending" title="Mobile Legend: " />
							<hr />
							<div className="purchase pt-30">
								<h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
								<RowInfo label="Your Game ID" value="masayoshizero" />
								<RowInfo label="Order ID" value="#GG001" />
								<RowInfo label="Item" value="250 Diamonds" />
								<RowInfo label="Price" value={42280500} />
								<RowInfo label="Tax (10%)" value={4228000} />
								<RowInfo label="Total" value={55000600} className="color-palette-4" />
							</div>
							<div className="payment pt-10 pb-10">
								<h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
								<RowInfo label="Your Account Name" value="Masayoshi Angga Zero" />
								<RowInfo label="Type" value="Worldwide Transfer" />
								<RowInfo label="Bank Name" value="Mandiri" />
								<RowInfo label="Bank Account Name" value="PT Store GG Indonesia" />
								<RowInfo label="Bank Number" value={180090902021} />
							</div>
							<div className="d-md-block d-flex flex-column w-100">
								<a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="#"
									role="button">WhatsApp ke Admin</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	)
}
