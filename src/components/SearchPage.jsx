import { useDispatch } from "react-redux";
import { getListOfSongs } from "../redux/actions";
import { useState } from "react";
import { Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {Button} from "react-bootstrap";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector(state => state.albums.data)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getListOfSongs(query));
  };

  return (
  <div>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  className="form-control searchBarInput"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Search for music"
                />
              </Form>
              <Button className="d-flex justify-content-center align-items-center mt-2 mb-2" onClick={() => navigate('/')}>Go back</Button>
              <ListGroup>
              {selector ? selector.map((albumData) => (
            <ListGroupItem className = "bkgr-img" key={albumData.id}>{albumData.title} <span className="custom-span">{albumData.artist.name}</span></ListGroupItem>
          )) : ""}
          </ListGroup>
          </div>
  );
};

export default SearchPage;
