import { STATUS } from "constants/status";
import { Badge } from "react-bootstrap";

export const getIconStatus = (status) => {
    switch (status) {
        case STATUS.PENDING:
            return <Badge bg="secondary">{status}</Badge>;
        case STATUS.CONFIRMED:
            return <Badge bg="info">{status}</Badge>;
        case STATUS.CANCELLED:
            return <Badge bg="danger">{status}</Badge>;
        default:
            return <Badge bg="success">{status}</Badge>;
    }
};
