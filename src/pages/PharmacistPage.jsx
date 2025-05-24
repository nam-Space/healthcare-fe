import DrugDistributionTab from "components/DrugDistributionTab";
import DrugInventoryTab from "components/DrugInventoryTab";
import { useState } from "react";
import {
    Button,
    Card,
    Container,
    Form,
    Tab,
    Table,
    Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const PharmacistPage = () => {
    const [key, setKey] = useState("inventory");

    return (
        <Container className="py-5">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2 className="mb-4">💊 Dịch vụ dược sĩ</h2>
                <Link to={"/"}>
                    <Button variant="secondary">Quay lại</Button>
                </Link>
            </div>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="inventory" title="Quản lý đơn thuốc, kho thuốc">
                    <DrugInventoryTab />
                </Tab>
                <Tab eventKey="dispense" title="Phát thuốc">
                    <DrugDistributionTab />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PharmacistPage;
