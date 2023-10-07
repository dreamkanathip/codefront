import React from "react";
import "./index.css";
import {
  UserOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Select, Breadcrumb, Avatar } from "antd";
import dayjs from "dayjs";

interface IForm {
  name: string;
  doctor: string;
  problem: string;
  dateTime: string;
}
const Body = () => {
  const onFinish = (values: IForm) => {
    const dateString = dayjs(values.dateTime).toString();
    console.log("Success:", { ...values, dateTime: dateString });
  };

  return (
    <div>
      <nav className="logout">
        <div className="system">ระบบบันทึกการนัดหมาย</div>
        <ul className="tabava">
          <li>
            <Button type="text" className="button">
              Logout
            </Button>
          </li>
          <li>
            <Avatar icon={<UserOutlined />} />
          </li>
        </ul>
      </nav>
      <Breadcrumb
        className="web"
        items={[
          {
            href: "/appointment",
            title: (
              <>
                <CalendarOutlined />
                <span>บันทึกการนัดหมาย</span>
              </>
            ),
          },
          {
            href: "/recordappointment",
            title: (
              <>
                <CarryOutOutlined />
                <span>ประวัติการนัดหมาย</span>
              </>
            ),
          },
        ]}
      />
      <h2 className="tabText">บันทึกการนัดหมาย</h2>
      <div className="box">
        <div className="tab">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item label="ชื่อผู้ป่วย" className="tabpa" name="name">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="แพทย์ผู้นัด" className="tabdent" name="doctor">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="เหตุที่นัด" className="tabprob" name="problem">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="วันนัดหมาย" className="tabdate" name="dateTime">
              <DatePicker />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                ยืนยัน
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <footer className="footer">
        ks clinic
        <p className="icon">
          <GlobalOutlined />
        </p>
      </footer>
    </div>
  );
};

export default Body;
