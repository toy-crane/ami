import CheckoutTemplate from "./templates";
import React from "react";
import { TransferGuideSection } from "components";

const Checkout = () => (
	<CheckoutTemplate
		content={<TransferGuideSection></TransferGuideSection>}
	></CheckoutTemplate>
);

export default Checkout;
