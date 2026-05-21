import {
    Avatar,
    Button,
    Card,
    Col,
    Divider,
    Flex,
    Layout,
    Progress,
    Row,
    Space,
    Tag,
    Timeline,
    Typography
} from "antd";

import {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    GithubOutlined,
} from "@ant-design/icons";

import "antd/dist/reset.css";

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function AboutMe() {
    return (
        <Layout>
            <Header style={{background: "#1290d3", padding: "16px 32px", height: "auto"}}>
                <Flex align="center" gap={24}>
                    <Avatar size={96}>SS</Avatar>
                    <div>
                        <Title level={1} style={{color: "#f0f4f0", margin: 0, textAlign: "center"}}>
                            Sergiy Sotnyk
                        </Title>

                        <Text style={{color: "white", fontSize: 12, lineHeight: '1.2'}}>
                            Junior Frontend Developer
                        </Text>
                    </div>
                </Flex>
            </Header>
            <Content style={{padding: 48, background: "#f5f5f5"}}>
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                        <Card title="Contacts">
                            <Space orientation="vertical" size={12}>
                                <Text>
                                    <MailOutlined/> sotnik89@gmail.com
                                </Text>
                                <Text>
                                    <PhoneOutlined/> +380 50 390 66 24
                                </Text>
                                <Text>
                                    <EnvironmentOutlined/> Odesa, Ukraine
                                </Text>
                                <Text>
                                    <GithubOutlined/> https://github.com/sotnik89
                                </Text>
                            </Space>
                        </Card>

                        <Card title="Skills" style={{marginTop: 24}}>
                            <Space orientation="vertical" style={{width: "100%"}}>
                                <Text>HTML / CSS</Text>
                                <Progress percent={70}/>

                                <Text>JavaScript</Text>
                                <Progress percent={60}/>

                                <Text>React</Text>
                                <Progress percent={50}/>

                                <Text>Redux</Text>
                                <Progress percent={30}/>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={24} md={16}>
                        <Card title="About me">
                            <Paragraph>
                                I am a frontend developer who studies React, JavaScript,
                                component architecture, routing, state management and modern UI libraries.
                            </Paragraph>

                            <Space wrap>
                                <Tag color="blue">React</Tag>
                                <Tag color="green">JavaScript</Tag>
                                <Tag color="purple">Redux</Tag>
                                <Tag color="orange">Vite</Tag>
                                <Tag color="cyan">Ant Design</Tag>
                            </Space>
                        </Card>

                        <Card title="Experience" style={{marginTop: 24}}>
                            <Timeline
                                items={[
                                    {color: "blue",
                                        children: (
                                            <>
                                                <Title level={4}>Logistic Manager</Title>
                                                <Text type="secondary">2011 — Present</Text>
                                                <Paragraph>
                                                    Managed global supply chain operations across multiple regions.
                                                </Paragraph>
                                            </>
                                        )
                                    },
                                    {color: "green",
                                        children: (
                                            <>
                                                <Title level={4}>HTML/CSS Practice</Title>
                                                <Text type="secondary">2023 — 2024</Text>
                                                <Paragraph>
                                                    Built landing pages and adaptive layouts using Flexbox,
                                                    SCSS and CSS Modules.
                                                </Paragraph>
                                            </>
                                        )
                                    }
                                ]}
                            />
                        </Card>

                        <Card title="Education" style={{marginTop: 24}}>
                            <Title level={4}>Frontend Development Courses</Title>
                            <ul style={{listStyle: "none"}}>
                                <li>Front-end Basic 2023 - Hillel IT school</li>
                                <li>Front-end Start 2025 - Hillel IT school</li>
                                <li>JavaScript Start 2026 - Hillel IT school</li>
                                <li>Front-end Pro 2026 - Hillel IT school</li>
                            </ul>
                            <Divider/>

                            <Paragraph>
                                Main topics: HTML, CSS, JavaScript, React, Redux,
                                Github, REST API, Vite and UI libraries.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
                <Flex justify="center" style={{marginTop: "24px"}}>
                    <Button type="primary" size="middle" style={{borderRadius:"16px"}}>
                        Download CV
                    </Button>
                </Flex>
            </Content>
        </Layout>
    );
}