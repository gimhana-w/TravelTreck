import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Modal, Form, Input, Button, Spin, message } from "antd";
import userService from "../../services/userService"; // Import userService

const SignupModal = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const data = { ...values, role: "user" }; // Set role to 'user' by default
      const result = await userService.createUser(data);
      localStorage.setItem(
        "user",
        JSON.stringify({
          _id: result._id,
          name: result.name,
          email: result.email,
        })
      );
      message.success("Registration successful!");
      onClose();
    } catch (error) {
      message.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Modal title="Sign Up" visible={visible} onCancel={onClose} footer={null}>
      <Spin spinning={loading}>
        <Form name="signup_form" onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

// Define prop types
SignupModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignupModal;
