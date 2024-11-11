import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useApi from './../utils/hook/useApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

const ProfilePage: React.FC = () => {
  const [sendRequest, setSendRequest] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.auth); // Fetching token from Redux store
  const { isSuccess, isLoading, data } = useApi({
    path: 'profile', // The profile API endpoint
    method: 'GET',
    sendRequest: sendRequest,
    reqData: null,
  });

  useEffect(() => {
    setSendRequest(true);
  }, []);

  return (
    <Container as="main" className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Profile</h3>
            </Card.Header>
            <Card.Body>
              {isLoading && <p>Loading...</p>}
              {isSuccess && data && (
                <>
                  <p><strong>ID:</strong> {data.id}</p>
                  <p><strong>Name:</strong> {data.name}</p>
                  <p><strong>Email:</strong> {data.email}</p>
                  <p><strong>Email Verified At:</strong> {data.email_verified_at || "Not Verified"}</p>
                  <p><strong>Created At:</strong> {new Date(data.created_at).toLocaleString()}</p>
                  <p><strong>Updated At:</strong> {new Date(data.updated_at).toLocaleString()}</p>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
