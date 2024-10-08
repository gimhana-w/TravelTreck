import { useState, useEffect } from "react";
import { List, Card, Typography, Spin, message, Modal } from "antd";
import TouristPlanService from "../../services/touristPlanService";
import PropTypes from "prop-types"; // Import PropTypes

const { Title, Text } = Typography;

const MyPlans = ({ visible, onClose }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      const userId = localStorage.getItem("uid");
      if (!userId) {
        message.error("User ID not found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        let fetchedPlans = await TouristPlanService.getAllTouristPlans();
        fetchedPlans = fetchedPlans.filter(
          (plan) => plan?.userId === localStorage.getItem("uid")
        );
        setPlans(fetchedPlans);
      } catch (error) {
        console.error("Failed to fetch plans:", error);
        message.error("Failed to load plans");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <Modal
      width={800}
      footer={null}
      onCancel={onClose}
      open={visible}
      style={{ padding: "20px" }}
    >
      <Title level={2}>My Plans</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={plans}
        renderItem={(plan) => (
          <List.Item>
            <Card title={`Plan for ${plan.numOfDays} days`}>
              <Text strong>Destinations:</Text>
              <ul>
                {plan.destinations.map((destination, index) => (
                  <li key={destination._id}>
                    {destination?.name} - {plan.hotels[index]?.name}
                  </li>
                ))}
              </ul>
              <Text strong>Created on: </Text>
              {new Date(plan.createdAt).toLocaleDateString()}
            </Card>
          </List.Item>
        )}
      />
    </Modal>
  );
};

// Add PropTypes for props validation
MyPlans.propTypes = {
  visible: PropTypes.bool.isRequired, // visible should be a boolean
  onClose: PropTypes.func.isRequired, // onClose should be a function
};

export default MyPlans;
