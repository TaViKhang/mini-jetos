'use client'; // 👈 QUAN TRỌNG: Dòng này bắt buộc để dùng Ant Design

import React from 'react';
import { Button, Card, Typography } from 'antd';

// Dùng trực tiếp Typography.Title an toàn hơn việc destructuring
const { Title, Text } = Typography;

export default function Home() {
  return (
    // Dùng Tailwind (flex, gap) thay cho <Space> để code sạch hơn và không bị lỗi warning
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-96 text-center shadow-lg">
        <div className="flex flex-col gap-6">
          <div>
            <Title level={3} style={{ color: '#1677ff', margin: 0 }}>
              Mini JetOS ✈️
            </Title>
            <Text type="secondary">System Status Check</Text>
          </div>

          <div className="p-4 bg-white rounded border border-gray-100 text-gray-600">
             <Text>
               Nếu nút bên dưới màu <strong>Xanh Dương</strong>, 
               Phase 1 đã thành công!
             </Text>
          </div>

          <Button type="primary" size="large" block>
            Confirm System Ready
          </Button>
        </div>
      </Card>
    </div>
  );
}