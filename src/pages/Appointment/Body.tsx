import React from "react";
import "./index.css";
import {
  UserOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Select, Breadcrumb, Avatar } from "antd";
const dateFormat = "DD/MM/YYYY";
function Body() {
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
          <Form.Item label="ชื่อผู้ป่วย" className="tabpa">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="แพทย์ผู้นัด" className="tabdent">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="เหตุที่นัด" className="tabprob">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="วันนัดหมาย" className="tabdate">
            <DatePicker />
          </Form.Item>
        </div>
        <Button type="primary" className="buttonSub">
          ยืนยัน
        </Button>
      </div>
      <footer className="footer">
        ks clinic
        <p className="icon">
          <GlobalOutlined />
        </p>
      </footer>
    </div>
  );
}

export default Body;
