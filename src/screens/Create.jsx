import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createName } from '../services/names';

export default function Create() {
  const [contact, setContact] = useState({
    _id: Math.floor((Math.random() * 1000000) + 1),
    index: Math.floor((Math.random() * 1000) + 1),
    guid: Math.floor((Math.random() * 10000) + 1),
    isActive: false,
    balance: "0",
    picture: "",
    age: 0,
    eyeColor: "",
    name: "",
    gender: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    about: "",
    registered: "",
    latitude: 0,
    longitude: 0,
    tags: [],
    friends: [],
    greeting: "",
    favoriteFruit: ""
  })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createName(contact)
    navigate("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setContact((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Add a Cute Cat in our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your picture"
          name="picture"
          value={contact.picture}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={contact.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="eyeColor"
          placeholder="What is your eye color?"
          value={contact.eyeColor}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="What is your name?"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={contact.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={contact.company}
          onChange={handleChange}
        />
        <button type="submit">Create Contact!</button>
      </form>
    </div>
  )
}
