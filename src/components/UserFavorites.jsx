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

const UserFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const [editModalShow, setEditModalShow] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedCountryId, setUpdatedCountryId] = useState('');

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/favorites');
        setFavorites(response.data);
      } catch (err) {
        setError('Failed to fetch favorites');
      }
    };

    fetchFavorites();
  }, []);

  const handleDelete = async (favoriteId) => {
    try {
      await axios.delete(`/favorites/${favoriteId}`);
      setFavorites(favorites.filter((favorite) => favorite._id !== favoriteId));
    } catch (err) {
      setError('Failed to delete favorite');
    }
  };

  const handleEdit = (favorite) => {
    setCurrentFavorite(favorite);
    setUpdatedName(favorite.food);
    setUpdatedDescription(favorite.description);
    setUpdatedCountryId(favorite.country_id);
    setEditModalShow(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/favorites/${currentFavorite._id}`, {
        food: updatedName,
        description: updatedDescription,
        country_id: updatedCountryId,
      });
      setFavorites(
        favorites.map((favorite) =>
          favorite._id === currentFavorite._id
            ? {
                ...favorite,
                food: updatedName,
                description: updatedDescription,
                country_id: updatedCountryId,
              }
            : favorite
        )
      );
      setEditModalShow(false);
    } catch (err) {
      setError('Failed to update favorite');
    }
  };

  return (
    <Container className='mt-5'>
      <h2 className='mb-4'>User Favorites</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <ListGroup>
        {Array.isArray(favorites) && favorites.length > 0 ? (
          favorites.map((favorite) => (
            <ListGroup.Item
              key={favorite._id}
              className='d-flex justify-content-between align-items-center'
            >
              <div>
                <h5>{favorite.food}</h5>
                <p>{favorite.description}</p>
                <p>{favorite.country_id}</p>
              </div>
              <div>
                <Button
                  variant='warning'
                  className='me-2'
                  onClick={() => handleEdit(favorite)}
                >
                  Edit
                </Button>
                <Button
                  variant='danger'
                  onClick={() => handleDelete(favorite._id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No favorites found</ListGroup.Item>
        )}
      </ListGroup>

      {/* Edit Favorite Modal */}
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Favorite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='editName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='editDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='editCountryId'>
              <Form.Label>Country ID</Form.Label>
              <Form.Control
                type='text'
                value={updatedCountryId}
                onChange={(e) => setUpdatedCountryId(e.target.value)}
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

export default UserFavorites;
