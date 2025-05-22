import ServiceCard from "components/ServiceCard";
import useLogoutUser from "hooks/useLogoutUser";
import _ from "lodash";
import { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { UserContext } from "utils/UserContext";

const HomePage = () => {
    const { user } = useContext(UserContext);
    const { handleLogout } = useLogoutUser();

    return (
        <Container className="py-5">
            <h1 className="mb-4 text-center">
                🏥 Healthcare Management System
            </h1>
            {!_.isEmpty(user) && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        marginBottom: 30,
                        gap: 20,
                    }}
                >
                    <div>
                        <h4>Xin chào {user.full_name}</h4>
                        <div>
                            Vai trò:{" "}
                            <span className="fw-bold">{user.role}</span>
                        </div>
                    </div>
                    <Button variant="danger" onClick={() => handleLogout()}>
                        Đăng xuất
                    </Button>
                </div>
            )}

            <Row className="g-4">
                {_.isEmpty(user) && (
                    <ServiceCard
                        title="Dịch vụ đăng ký/đăng nhập🔐"
                        path="/auth"
                    />
                )}

                <ServiceCard title="Thông tin cá nhân👱‍♂️" path="/profile" />
                {user.role === "patient" && (
                    <ServiceCard title="Dịch vụ bệnh nhân🧑‍⚕️" path="/patients" />
                )}

                {user.role === "doctor" && (
                    <ServiceCard title="Dịch vụ bác sỹ👨‍⚕️" path="/doctors" />
                )}

                {user.role === "pharmacist" && (
                    <ServiceCard
                        title="Dịch vụ dược sỹ💊"
                        path="/pharmacists"
                    />
                )}

                <ServiceCard title="Dịch vụ chatbot🤖" path="/chatbot" />
            </Row>
        </Container>
    );
};

export default HomePage;
