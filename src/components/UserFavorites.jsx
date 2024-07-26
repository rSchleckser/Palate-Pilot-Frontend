import { useState } from 'react';
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
  // Fake favorites data
  const [favorites, setFavorites] = useState([
    { _id: '1', name: 'Pizza' },
    { _id: '2', name: 'Burger' },
    { _id: '3', name: 'Sushi' },
  ]);
  const [error, setError] = useState(null);
  const [editModalShow, setEditModalShow] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState(null);
  const [updatedName, setUpdatedName] = useState('');

  const handleDelete = async (favoriteId) => {
    try {
      // Simulate deletion
      await axios.delete(`/api/favorites/${favoriteId}`);
      setFavorites(favorites.filter((favorite) => favorite._id !== favoriteId));
    } catch (err) {
      setError('Failed to delete favorite');
    }
  };

  const handleEdit = (favorite) => {
    setCurrentFavorite(favorite);
    setUpdatedName(favorite.name);
    setEditModalShow(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/favorites/${currentFavorite._id}`, {
        name: updatedName,
      });
      // Update local state
      setFavorites(
        favorites.map((favorite) =>
          favorite._id === currentFavorite._id
            ? { ...favorite, name: updatedName }
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
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <ListGroup.Item
              key={favorite._id}
              className='d-flex justify-content-between align-items-center'
            >
              <div>
                <h5>{favorite.name}</h5>
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
