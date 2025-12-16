'use client';

import React from 'react';
import { Card, Typography, Table, Tag, Statistic, Row, Col } from 'antd';
import { 
  RocketOutlined, 
  CheckCircleOutlined, 
  ClockCircleOutlined,
  CloseCircleOutlined 
} from '@ant-design/icons';
import { mockFlights } from '@/data/mockFlights';
import { Flight, FlightStatus } from '@/types/flight';

const { Title, Text } = Typography;

export default function Home() {
  // CLEAN ARCHITECTURE: Business logic separated from UI
  const getStatusColor = (status: FlightStatus): string => {
    const statusColors: Record<FlightStatus, string> = {
      'Scheduled': 'blue',
      'Boarding': 'orange',
      'In Air': 'cyan',
      'Landed': 'green',
      'Cancelled': 'red',
    };
    return statusColors[status];
  };

  const getStatusCount = (status: FlightStatus): number => {
    return mockFlights.filter(f => f.status === status).length;
  };

  // Table columns configuration
  const columns = [
    {
      title: 'Flight',
      dataIndex: 'flightNumber',
      key: 'flightNumber',
      width: 100,
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Route',
      key: 'route',
      width: 150,
      render: (_: unknown, record: Flight) => (
        <Text>{record.origin} → {record.destination}</Text>
      ),
    },
    {
      title: 'Airline',
      dataIndex: 'airline',
      key: 'airline',
      width: 150,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: FlightStatus) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: 'Gate',
      dataIndex: 'gate',
      key: 'gate',
      width: 80,
      render: (gate?: string) => gate || '-',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Title level={2}>
            <RocketOutlined /> Mini JetOS - Data Layer Test
          </Title>
          <Text type="secondary">
            Testing Phase 2: Type Definitions + Mock Data (Clean Architecture)
          </Text>
        </div>

        {/* Statistics */}
        <Row gutter={16} className="mb-8">
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Flights"
                value={mockFlights.length}
                prefix={<RocketOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Scheduled"
                value={getStatusCount('Scheduled')}
                valueStyle={{ color: '#1677ff' }}
                prefix={<ClockCircleOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="In Air"
                value={getStatusCount('In Air')}
                valueStyle={{ color: '#13c2c2' }}
                prefix={<RocketOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Landed"
                value={getStatusCount('Landed')}
                valueStyle={{ color: '#52c41a' }}
                prefix={<CheckCircleOutlined />}
              />
            </Card>
          </Col>
        </Row>

        {/* Data Table */}
        <Card title="Flight Data (15 Records)">
          <Table
            columns={columns}
            dataSource={mockFlights.map(f => ({ ...f, key: f.id }))}
            pagination={{ pageSize: 10 }}
            scroll={{ x: 800 }}
          />
        </Card>

        {/* Clean Architecture Notes */}
        <Card className="mt-8" title="✅ Clean Architecture Checklist">
          <div className="space-y-2">
            <Text>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> 
              {' '}Types defined in <code>@/types/flight.ts</code> (Single Source of Truth)
            </Text>
            <br />
            <Text>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> 
              {' '}Mock data in <code>@/data/mockFlights.ts</code> (Separation of Concerns)
            </Text>
            <br />
            <Text>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> 
              {' '}Business logic in component (getStatusColor, getStatusCount)
            </Text>
            <br />
            <Text>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> 
              {' '}No <code>any</code> type - Strict TypeScript
            </Text>
            <br />
            <Text>
              <CloseCircleOutlined style={{ color: '#ff4d4f' }} /> 
              {' '}No API calls - Pure Frontend (as per rules)
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
}