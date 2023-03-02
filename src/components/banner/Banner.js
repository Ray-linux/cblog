import "./banner.css";
import TypeWriterEffect from 'react-typewriter-effect';



export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="overlay"></div>
      </div>
      <div className="content">
        <h1>Welcome to Hacktastic</h1>
        <span>
        <TypeWriterEffect className='text'
        textStyle={{
          // fontFamily: '',
          color: '#fff',
          fontWeight: 500,
          fontSize: '.9em',
        }}
        startDelay={2000}
        cursorColor="#ffffff"
        multiText={[
          'The more that you read, the more things you will know. The more that you learn, the more places you’ll go.',
          'For the things we have to learn before we can do them, we learn by doing them.',
          'Intellectual growth should commence at birth and cease only at death.',
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
        multiTextLoop
      />
      </span>
      </div>
    </>
  );
}
