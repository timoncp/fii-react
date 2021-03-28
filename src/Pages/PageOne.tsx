import React from "react";
import { Card, Row, Col, Space, Divider, Button } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  SendOutlined,
  SaveOutlined,
  UserOutlined,
} from '@ant-design/icons';

const posts = [
  {
    username: 'glitch_lab_app',
    likes: 39,
    description: 'Made with glitch lab app #...',
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    username: 'spacex',
    likes: 1150,
    description: 'For SpaceX Launch, It’s All About the Vertical Landing',
    cover: "https://www.biologyoftechnology.com/wp-content/uploads/2020/06/Vertical_Landing-1.jpg",
  },
  {
    username: 'spacex',
    likes: 1150,
    description: 'For SpaceX Launch, It’s All About the Vertical Landing',
    cover: "https://www.biologyoftechnology.com/wp-content/uploads/2020/06/Vertical_Landing-1.jpg",
  },
];

const PageOne = () => {

  return (
    <Space size='middle' direction='vertical'>
      {posts.map((post) => (
        <Card
          title={post.username}
          extra={<EllipsisOutlined />}
          style={{ width: 400 }}
          cover={
            <img alt="example" src={post.cover} />
          }
        >
          <Row justify="start" >
            <Col span={3}>
              <Space size="small"><HeartOutlined style={{fontSize:"30px"}}/>
            <MessageOutlined style={{fontSize:"30px"}}/>
            <SendOutlined style={{fontSize:"30px"}}/></Space>
            </Col>
            <Col span={1} offset={20}><SaveOutlined style={{fontSize:"30px"}}/></Col>
          </Row>
          <p>
            <b>{post.likes} likes</b>
          </p>
          <Space size='small'>
            <b>{post.username}</b>
            <span>{post.description}</span>
          </Space>
          <Divider dashed />
          <Space size='middle'>
            <UserOutlined />
            <span>Add a comment...</span>
            <Button type="link">Post</Button>
          </Space>
        </Card>
      ))}
    </Space>
  );
};

export default PageOne;
