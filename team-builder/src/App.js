import React, { useState } from 'react';
import './App.css';
import MemberForm from './components/MemberForm';
import Member from './components/Member';
import MemberList from './components/MemberList';
// import logo from './logo.svg';


function App() {
  // Rendering members
  const [members, setMembers] = useState(MemberList);

  // Make a function adding members
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    };
    setMembers([...members, newMember])
  }

  return (
    <div className='App'>
      <Member members={members} />
      <MemberForm addNewMember={addNewMember} />
    </div>
  );
}

export default App;