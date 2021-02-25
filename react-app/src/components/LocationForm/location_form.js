import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import * as locationActions from '../../store/locations'

const LocationForm = () => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [street_address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip_code, setZip] = useState(0)
    const [description, setDescription] = useState('')
    const [lat, setLat] = useState(0.1)
    const [long, setLong] = useState(0.1)
    const [photo, setPhoto] = useState('')
    const [errors, setErrors] = useState([])

    const sessionUser = useSelector((state) => state.session.user) 
  
    const dispatch = useDispatch()
  
      
    const handleSubmit = async (e) => {
        e.preventDefault()
        debugger
        let newErrors = []
        dispatch(locationActions.addLocation({ 
            user_id: sessionUser.id,
            street_address,
            city,
            state,
            zip_code,
            title,
            description,
            artist,
            lat, 
            long,
            photo  
        }))
        .then(() => {
            setTitle("");
            setArtist("");
            setAddress("");
            setCity("");
            setState("");
            setZip(0);
            setDescription("");
            setLat(0.1);
            setLong(0.1);
            setPhoto('');
        })
        .catch((res) => {
            debugger
            if (res.data && res.data.errors) {
                newErrors = res.data.errors;
                setErrors(newErrors);
            }
        });
    }
  


    return (
    <>
        <h1>Enter a New Location</h1>
        <fieldset>
        {errors.length > 0 &&
          errors.map((error) => <div key={error}>{error}</div>)}
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Artist"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Street Address"
                        value={street_address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        placeholder="Zip Code"
                        value={zip_code}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="textarea"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    <input type="file"  onChange={e => setPhoto(e.target.files[0])} />
                </label>
                <label>
                    <input
                        type="number"
                        step="any"
                        placeholder="Lat"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        step="any"
                        placeholder="Long"
                        value={long}
                        onChange={(e) => setLong(e.target.value)}
                    />
                </label>
                <label>
                    <button type="submit">Create Location</button>
                </label>
            </form>
        </fieldset>
    </>
    )
}

export default LocationForm