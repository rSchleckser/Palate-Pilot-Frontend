import { useState, useEffect } from 'react';
import {
  Container,
  ListGroup,
  Button,
  Alert,
  Form,
  Modal,
} from 'react-bootstrap';
import axios from 'axios';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [editModalShow, setEditModalShow] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');

  // Fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/reviews', {
          headers: {
            'x-auth-token': token,
          },
        });
        setReviews(response.data);
      } catch (err) {
        setError('Failed to fetch reviews');
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (reviewId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/reviews/${reviewId}`, {
        headers: {
          'x-auth-token': token,
        },
      });
      setReviews(reviews.filter((review) => review._id !== reviewId));
    } catch (err) {
      setError('Failed to delete review');
    }
  };

  const handleEdit = (review) => {
    setCurrentReview(review);
    setUpdatedTitle(review.title);
    setUpdatedContent(review.content);
    setEditModalShow(true);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `/reviews/${currentReview._id}`,
        {
          title: updatedTitle,
          content: updatedContent,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      // Update local state
      setReviews(
        reviews.map((review) =>
          review._id === currentReview._id
            ? { ...review, title: updatedTitle, content: updatedContent }
            : review
        )
      );
      setEditModalShow(false);
    } catch (err) {
      setError('Failed to update review');
    }
  };

  return (
    <Container className='mt-5'>
      <h2 className='mb-4'>User Reviews</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <ListGroup>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ListGroup.Item
              key={review._id}
              className='d-flex justify-content-between align-items-center'
            >
              <div>
                <h5>{review.title}</h5>
                <p>{review.content}</p>
              </div>
              <div>
                <Button
                  variant='warning'
                  className='me-2'
                  onClick={() => handleEdit(review)}
                >
                  Edit
                </Button>
                <Button
                  variant='danger'
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No reviews found</ListGroup.Item>
        )}
      </ListGroup>

      {/* Edit Review Modal */}
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='editTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='editContent' className='mt-3'>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setEditModalShow(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserReviews;
