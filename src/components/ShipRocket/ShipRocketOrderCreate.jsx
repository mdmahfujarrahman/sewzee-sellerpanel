import CloseIcon from "@mui/icons-material/Close";

import CustomModal from "../../ui/CustomModal/CustomModal";
import "./ShipRocketOrder.css";
import CustomAccordion from "../../ui/CustomAccordion/CustomAccordion";

const ShipRocketOrderCreate = ({ open, handleClose }) => {
    return (
        <CustomModal open={open} onClose={handleClose}>
            <div className="ShipRocketOrderModalWrapper">
                <div className="orderConfirmationHeader">
                    <h6>Order Details</h6>
                    <CloseIcon onClick={handleClose} />
                </div>
                <CustomAccordion>
                    <h1>Hello</h1>
                </CustomAccordion>
            </div>
        </CustomModal>
    );
};

export default ShipRocketOrderCreate;
