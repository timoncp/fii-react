import { Button } from "antd";
import { HeartOutlined } from '@ant-design/icons';
import React, { useState } from "react";

const PageTwo = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <Button onClick={() => setLiked(!liked)}>
        {!liked && <HeartOutlined />}
        {liked ? 'Unlike' : 'Like'}
      </Button>
    </div>
  );
};

export default PageTwo;
