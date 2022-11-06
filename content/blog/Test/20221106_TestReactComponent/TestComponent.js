import React from "react"
import {
  Calendar,
  Card,
  Link,
  Carousel,
  Collapse,
  Divider,
  Table,
  Tooltip,
  Button,
} from "@arco-design/web-react"

const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
]

const CollapseItem = Collapse.Item

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
]
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
]

const colors = ["#3491FA", "#165DFF", "#722ED1"]

const TestComponent = () => {
  return (
    <div>
      <div style={{ width: "100%", overflow: "auto" }}>
        <h2>Calendar</h2>
        <Calendar defaultValue="2022-11-06" headerType="select" />
      </div>
      <div>
        <h2>Card</h2>
        <div style={{ display: "flex" }}>
          <Card
            style={{ width: 360 }}
            title="Arco Card"
            extra={<Link>More</Link>}
          >
            This is a card test!
          </Card>
        </div>
      </div>
      <div>
        <h2>Test Carousel</h2>
        <Carousel
          autoPlay
          animation="card"
          showArrow="never"
          indicatorPosition="outer"
          style={{ width: "100%", height: 240 }}
        >
          {imageSrc.map((src, index) => (
            <div key={index} style={{ width: "60%" }}>
              <img src={src} style={{ width: "100%" }} />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h2>Test Collapse</h2>
        <div>
          <Collapse defaultActiveKey={["1"]} style={{ maxWidth: 1024 }}>
            <CollapseItem header="Level 1" name="1">
              Level 2-1
              <Divider style={{ margin: "8px 0" }} />
              Level 2-2
              <Divider style={{ margin: "8px 0" }} />
              Level 2-3
            </CollapseItem>
          </Collapse>
        </div>
      </div>
      <div>
        <h2>Test Table</h2>
        <Table columns={columns} data={data} />
      </div>
      <div>
        <h2>Test Tooltips</h2>
        <div>
          {colors.map(color => {
            return (
              <Tooltip key={color} color={color} content="tooltip text">
                <Button
                  style={{
                    marginRight: 20,
                    background: color,
                    color: "#fff",
                  }}
                >
                  {color}
                </Button>
              </Tooltip>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TestComponent
