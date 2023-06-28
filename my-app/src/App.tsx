import React from 'react';

import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContext, UserContextProvider } from './components/context/UserContext';
import { User2 } from './components/context/User';
import { MutableRef } from './components/ref/Mutable';
import { Counter2 } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './generics/List';
import { RandomNumber } from './components/Retricated/RandomNumber';
import { Toast } from './components/TemplateLiteral/Toast';
import { CustomButton } from './components/html/ButtonHtml';
import { Text } from './components/Polymorphic/Test';

function App() {
  const PersonName={
    first:'XYZ',
    last:'Gupta',
  }
  const namelist=[
    {
      first:'xyx',
      last:'abc'
    },
    {
      first:'ppp',
      last:'qqqq'
    },
    {
      first:'rrr',
      last:'oooo'
    }

  ]
  /*
  return (
    <div>

      <Greet name="lohawallah" messageCount={20} isLoggedIn={true}/>
      <Person name={PersonName}/>
      <PersonList names={namelist}/>
      <Status status='success'/>
<Oscar>
  <Heading>PlaceHolder text</Heading>
      </Oscar>
      <Button handleClick={(event)=>{console.log("HII",event)}}></Button>
      <Input value='' handleChange={(event)=>{console.log(event)}}/>
      <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider>
    <UserContextProvider>
      <User2/>
    </UserContextProvider>
    <MutableRef/>
      Private  isLoggedIn={true} component={Profile}/>
      <Counter2  message='Count value is '/>
      <List items={['batman','heman','hanuman']} onClick={(item)=>console.log(item)}/>
    <List items={[1,2,3]} onClick={(item)=>console.log(item)}/>
        
    <RandomNumber value={10} isPositive={true} />
    <Toast position='left-center'/>
    <CustomButton onClick={()=>console.log('clicked')} variant='primary'>Primary Button</CustomButton>

    </div>
  );*/
  return(
   <div className='App'>
    <Text as='h1' size='lg'>Heading</Text>
    <Text as='p' size='md'>Paragraf</Text>
    <Text as='label' size='sm'>Label</Text>
    
    
    
   </div>


  )
}

export default App;
