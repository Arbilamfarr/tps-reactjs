import React, { useState } from 'react';


function LivreOr() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      name: name,
      email: email,
      country: country,
      message: message,
    };
    setEntries([...entries, newEntry]);
    setName('');
    setEmail('');
    setCountry('');
    setMessage('');
  };

  return (
    <div className="container w-50 bg-light rounded-2">
      <h1 className='text-center'>Livre d'or</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pays:</label>
          <input
            type="text"
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Soumettre</button>
      </form>
      <div className="entries mt-4 mb-5 ">
        <h2 className='bg-warning text-center rounded-5 '>Messages</h2>
        {entries.map((entry, index) => (
          <div key={index} className="entry border p-3 mb-3 ">
            <p className='bg-info rounded-5 py-2 px-3'><strong>Nom:</strong> {entry.name}</p>
            <p className='bg-info rounded-5 py-2 px-3'><strong>E-mail:</strong> {entry.email}</p>
            <p className='bg-info rounded-5 py-2 px-3'><strong>Pays:</strong> {entry.country}</p>
            <p className='bg-info rounded-5 py-2 px-3'><strong>Message:</strong> {entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LivreOr;
